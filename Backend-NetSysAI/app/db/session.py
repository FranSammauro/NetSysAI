from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://netsys:netsys123@localhost:5432/netsysai"

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# 🔥 ESTA PARTE ES LA QUE TE FALTA
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()