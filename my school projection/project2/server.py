
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os
import webbrowser

ROOT = Path(__file__).resolve().parent

os.chdir(ROOT)

HOST = "127.0.0.1"
PORT = 8000

if __name__ == "__main__":
    url = f"http://{HOST}:{PORT}"

    print("დედაენა 150 გაშვებულია:", url)
    print("შესაჩერებლად დააჭირე Ctrl+C")

    try:
        webbrowser.open(url)
    except Exception:
        pass

    server = ThreadingHTTPServer(
        (HOST, PORT),
        SimpleHTTPRequestHandler
    )

    server.serve_forever()
