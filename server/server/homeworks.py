from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from .models import Homework
from .utils import manager
from .db.homeworks import create_hw, update_hw, delete_hw, get_hw, get_hws

router = APIRouter()


@router.post("/create")
def create(hw: Homework, user=Depends(manager)):
    if (
        not hw.name
        or not hw.description
        or not hw.due
        or not hw.class_
        or not hw.assigned_by
    ):
        return JSONResponse({"error": "fields cannot be empty"}, 400)

    res = create_hw(
        hw.name, hw.description, hw.due, hw.class_, hw.assigned_by, user.email
    )
    if res == -1:
        return JSONResponse({"error": "fields cannot be empty"}, 400)

    return JSONResponse(res, 200)


@router.put("/update/{id}")
def update(id: int, hw: Homework, user=Depends(manager)):
    if (
        not hw.name
        or not hw.description
        or not hw.due
        or not hw.class_
        or not hw.assigned_by
    ):
        return JSONResponse({"error": "fields cannot be empty"}, 400)

    if get_hw(id)[-1] != user.email:
        return JSONResponse({"error": "not enough permissions"}, 403)

    res = update_hw(
        id, hw.name, hw.description, hw.due, hw.class_, hw.assigned_by, user.email
    )
    if res == -1:
        return JSONResponse({"error": "fields cannot be empty"}, 400)

    return JSONResponse({"msg": "updated homework successfully"}, 200)


@router.delete("/delete/{id}")
def delete(id: int, user=Depends(manager)):
    if not id:
        return JSONResponse({"error": "id cannot be empty"}, 400)

    if get_hw(id)[-1] != user.email:
        return JSONResponse({"error": "not enough permissions"}, 403)

    res = delete_hw(id)
    if res == -1:
        return JSONResponse({"error": "id cannot be empty"}, 400)

    return JSONResponse({"msg": "deleted homework successfully"}, 200)


@router.get("/")
def get_all(user=Depends(manager)):
    res = get_hws()
    res = [i for i in res if i[-1] == user[0]]
    return res