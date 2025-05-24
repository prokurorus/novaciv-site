import os
import tkinter as tk
from tkinter import filedialog, messagebox
import webbrowser

def start_server():
    try:
        os.system("start cmd /k python -m http.server")
    except Exception as e:
        messagebox.showerror("Ошибка запуска сервера", str(e))

def open_folder():
    try:
        os.startfile(os.getcwd())
    except Exception as e:
        messagebox.showerror("Ошибка открытия папки", str(e))

def push_to_github():
    try:
        os.system("start cmd /k \"git add . && git commit -m AutoPush && git push\"")
    except Exception as e:
        messagebox.showerror("Ошибка при Git Push", str(e))


def open_netlify():
    try:
        webbrowser.open("https://app.netlify.com/")
    except Exception as e:
        messagebox.showerror("Ошибка открытия Netlify", str(e))

root = tk.Tk()
root.title("NovaCiv - Локальная панель управления")
root.geometry("350x300")
root.resizable(False, False)

label = tk.Label(root, text="Локальная работа с сайтом NovaCiv", font=("Arial", 12))
label.pack(pady=10)

btn_server = tk.Button(root, text="✔ Запустить сайт локально", command=start_server, bg="#4CAF50", fg="white", width=30, height=2)
btn_server.pack(pady=5)

btn_open_folder = tk.Button(root, text="📂 Открыть папку проекта", command=open_folder, bg="#2196F3", fg="white", width=30, height=2)
btn_open_folder.pack(pady=5)

btn_git_push = tk.Button(root, text="⬆️ Отправить на GitHub", command=push_to_github, bg="#9C27B0", fg="white", width=30, height=2)
btn_git_push.pack(pady=5)

btn_netlify = tk.Button(root, text="🌍 Перейти на Netlify", command=open_netlify, bg="#FF9800", fg="white", width=30, height=2)
btn_netlify.pack(pady=5)

root.mainloop()
