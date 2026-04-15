from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.user import User
from app.schemas.user import UserCreate

from app.core.security import hash_password, verify_password, create_access_token

router = APIRouter()

# 🔹 REGISTER
@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):
    new_user = User(
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User created"}


# 🔹 LOGIN
@router.post("/login")
def login(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()

    # usuario no existe
    if not db_user:
        raise HTTPException(status_code=400, detail="Invalid credentials")

    # password incorrecta
    if not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    # generar el token
    token = create_access_token({
        "sub": db_user.email
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }