from datetime import timedelta
import os
from fastapi_login import LoginManager
from .db.users import get_user


manager = LoginManager(os.getenv("SECRET"), "/login", default_expiry=timedelta(days=28))


@manager.user_loader()
def load_user(email):
    if not get_user(email):
        return None
    return get_user(email)