import bcrypt
from dotenv import load_dotenv
import os
from sqlalchemy import create_engine, text
import bcrypt

load_dotenv()

engine = create_engine(os.getenv("DB_URI"), future=True)

"""
users table schema
CREATE TABLE `users` (
	`email` varchar(255) NOT NULL,
	`password` longblob,
	PRIMARY KEY (`email`)
) ENGINE InnoDB,
  CHARSET utf8mb4,
  COLLATE utf8mb4_0900_ai_ci;
"""


def create_user(email: str, password: str):
    if not email or not password:
        return -1

    with engine.connect() as conn:
        res = conn.execute(text("SELECT * FROM users")).all()
        res = [i[0] for i in res]
        if email in res:
            return 1
        conn.execute(
            text("""INSERT INTO users VALUES (:email, :password)"""),
            [
                {
                    "email": email,
                    "password": bcrypt.hashpw(password.encode(), bcrypt.gensalt()),
                }
            ],
        )
        conn.commit()
        return 0


def update_user(email: str, email_: str, password: str):
    if not email or not password:
        return -1

    with engine.connect() as conn:
        conn.execute(
            text(
                "UPDATE users SET email = :email, password = :password WHERE email = :oldemail"
            ),
            [
                {
                    "email": email_,
                    "password": bcrypt.hashpw(password.encode(), bcrypt.gensalt()),
                    "oldemail": email,
                }
            ],
        )
        conn.commit()
        return 0


def delete_user(email: str):
    if not email:
        return -1

    with engine.connect() as conn:
        conn.execute(text("DELETE FROM users WHERE email = :email"), [{"email": email}])
        conn.commit()
        return 0


def get_user(email: str):
    if not email:
        return None

    with engine.connect() as conn:
        res = conn.execute(
            text("SELECT * FROM users WHERE email = :email"), [{"email": email}]
        ).all()
        try:
            return res[0]
        except IndexError:
            return None


def get_users(limit: int = None):
    if limit is not None:
        with engine.connect() as conn:
            res = conn.execute(
                text("SELECT * FROM users LIMIT :limit"), [{"limit": limit}]
            ).all()
            return res
    else:
        with engine.connect() as conn:
            res = conn.execute(text("SELECT * FROM users"), [{"limit": limit}]).all()
            return res
