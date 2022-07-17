from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from .models import Class
from .utils import manager
from .db.classes import create_schedule, get_schedule, update_schedule#, delete_hw, get_hw, get_hws

router = APIRouter()


@router.post("/create/schedule")
def create(user=Depends(manager)):
    res = create_schedule(user.email)
    if res == -1:
        return JSONResponse({"error": "fields cannot be empty"}, 400)
    elif res == 1:
        return JSONResponse({"error": "schedule already exists"}, 409)

    return JSONResponse({"msg": "created schedule successfully"}, 201)


@router.put("/update/schedule")
def update(class_: Class, user=Depends(manager)):
    res = update_schedule(user.email, class_.day, class_.stime, class_.etime, class_.name, class_.teacher)

    if res == -1:
        return JSONResponse({"error": "fields cannot be empty"}, 400)

    return JSONResponse({"msg":"updated schedule successfully"}, 200)


@router.get("/schedule")
def get(user=Depends(manager)):
    res = get_schedule(user.email)

    if res == -1:
        return JSONResponse({"error": "fields cannot be empty"}, 400)

    return JSONResponse(res, 200)