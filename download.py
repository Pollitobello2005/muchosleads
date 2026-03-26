import urllib.request
def get_favicon(domain):
    return f"https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://{domain}&size=128"

urls = {
    "3.png": get_favicon("apollo.io"),
    "4.png": get_favicon("clay.com"),
    "7.png": get_favicon("instantly.ai"),
    "12.png": get_favicon("hubspot.com"),
    "13.png": get_favicon("looker.com"),
    "10.png": get_favicon("maps.google.com")
}
for name, url in urls.items():
    try:
        urllib.request.urlretrieve(url, f"c:/Users/roberto/Desktop/muchosleads/public/{name}")
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")
