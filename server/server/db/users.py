import bcrypt
from ..schemas import LearnistUser


def create_user(email: str, password: str):
    if not email or not password:
        return -1

    if email in [user.email for user in LearnistUser.get_all()]:
        return 1

    LearnistUser(email=email, password=bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()).save()
    return 0

    # with engine.connect() as conn:
    #     res = conn.execute(text("SELECT * FROM users")).all()
    #     res = [i[0] for i in res]
    #     if email in res:
    #         return 1
    #     conn.execute(
    #         text("""INSERT INTO users VALUES (:email, :password)"""),
    #         [
    #             {
    #                 "email": email,
    #                 "password": bcrypt.hashpw(password.encode(), bcrypt.gensalt()),
    #             }
    #         ],
    #     )
    #     conn.commit()
    #     return 0


def update_user(email: str, email_: str, password: str):
    if not email or not password:
        return -1

    if email not in [user.email for user in LearnistUser.get_all()]:
        return 1

    user = LearnistUser.query(LearnistUser.email == email)
    user.email = email_
    user.save()
    return 0

    # with engine.connect() as conn:
    #     conn.execute(
    #         text(
    #             "UPDATE users SET email = :email, password = :password WHERE email = :oldemail"
    #         ),
    #         [
    #             {
    #                 "email": email_,
    #                 "password": bcrypt.hashpw(password.encode(), bcrypt.gensalt()),
    #                 "oldemail": email,
    #             }
    #         ],
    #     )
    #     conn.commit()
    #     return 0


def delete_user(email: str):
    if not email:
        return -1

    if email not in [user.email for user in LearnistUser.get_all()]:
        return 1

    user = LearnistUser.query(LearnistUser.email == email)
    user.delete()
    return 0

    # with engine.connect() as conn:
    #     conn.execute(text("DELETE FROM users WHERE email = :email"), [{"email": email}])
    #     conn.commit()
    #     return 0


def get_user(email: str):
    if not email:
        return None

    return LearnistUser.query(LearnistUser.email == email)

    # with engine.connect() as conn:
    #     res = conn.execute(
    #         text("SELECT * FROM users WHERE email = :email"), [{"email": email}]
    #     ).all()
    #     try:
    #         return res[0]
    #     except IndexError:
    #         return None


def get_users(limit: int = None):
    if limit:
        return LearnistUser.get_all()[:limit]
    return LearnistUser.get_all()

    # if limit is not None:
    #     with engine.connect() as conn:
    #         res = conn.execute(
    #             text("SELECT * FROM users LIMIT :limit"), [{"limit": limit}]
    #         ).all()
    #         return res
    # else:
    #     with engine.connect() as conn:
    #         res = conn.execute(text("SELECT * FROM users"), [{"limit": limit}]).all()
    #         return res
