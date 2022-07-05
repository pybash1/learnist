import bcrypt
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from .db.users import create_user
from .models import User
from .utils import manager, load_user

router = APIRouter()


@router.post("/register")
def register(user: User):
    if not user.email or not user.password:
        return JSONResponse({"error": "missing email or password"}, 422)

    if load_user(user.email) is not None:
        return JSONResponse({"error": "user already exists"}, 409)

    user_ = create_user(user.email, user.password)
    if user_ == -1:
        return JSONResponse({"error": "missing email or password"}, 422)
    elif user == 1:
        return JSONResponse({"error": "user already exists"}, 409)
    else:
        token = manager.create_access_token(data={"sub": user.email})
        return JSONResponse({"msg": "created user successfully", "token": token}, 201)


@router.post("/login")
def login(user: User):
    if not user.email or not user.password:
        return JSONResponse({"error": "missing email or password"}, 422)

    user_ = load_user(user.email)

    if user_ is None:
        return JSONResponse({"error": "user doesnt exists"}, 404)

    if bcrypt.checkpw(user.password.encode(), user_[1]):
        token = manager.create_access_token(data={"sub": user.email})
        return JSONResponse({"msg": "logged in successfully", "token": token})
    else:
        return JSONResponse({"error": "incorrect password"}, 401)


@router.get("/user")
def user(user=Depends(manager)):
    return {"email": user["email"], "username": user["email"].split("@")[0]}
