from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from . import auth
from . import users
from . import homeworks

api = FastAPI()

api.add_middleware(CORSMiddleware, allow_origins=["*"], allow_headers=["*"], allow_methods=["*"], allow_credentials=True)

api.include_router(auth.router, tags=["Authentication"])
api.include_router(users.router, tags=["Users"])
api.include_router(homeworks.router, tags=["Homeworks"], prefix="/homeworks")


@api.get("/")
def index():
    return JSONResponse({"ok": True}, 200)
