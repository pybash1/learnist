from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from .utils import manager, load_user
from .db.users import update_user, delete_user
from .models import User

router = APIRouter()


@router.put("/update/{email}")
def update(email: str, user: User, user_=Depends(manager)):
    if not load_user(email):
        return JSONResponse({"error": "user does not exist"}, 404)

    if user_[0] != email:
        return JSONResponse({"error": "don't have permission to update user"}, 403)

    update_user(email, user.email, user.password)
    return JSONResponse({"msg": "updated user successfully"}, 200)


@router.delete("/delete/{email}")
def delete(email: str, user=Depends(manager)):
    if not load_user(email):
        return JSONResponse({"error": "user does not exist"}, 404)

    if user[0] != email:
        return JSONResponse({"error": "don't have permission to update user"}, 403)

    delete_user(email)
    return JSONResponse({"msg": "deleted user successfully"}, 200)
