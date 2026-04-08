def analyze_url(url: str):
    if not url:
        return {"status": "error", "message": "No URL provided"}

    url = url.lower()

    if "login" in url or "verify" in url:
        return {
            "status": "suspicious",
            "reason": "Contains common phishing keywords"
        }

    if "free" in url or "bonus" in url:
        return {
            "status": "dangerous",
            "reason": "Potential scam patterns detected"
        }

    return {
        "status": "safe",
        "reason": "No suspicious patterns found"
    }