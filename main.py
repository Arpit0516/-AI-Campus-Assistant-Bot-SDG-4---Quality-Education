print("===================================")
print(" AI Powered Campus Assistant Bot ")
print("===================================")
print("Type 'exit' to quit\n")

while True:
    user = input("You: ").lower()

    if user == "exit":
        print("Bot: Thank you for using Campus Assistant Bot!")
        break

    elif "timetable" in user:
        print("Bot: Your class timetable is available on the student portal.\n")

    elif "exam" in user:
        print("Bot: Exams begin from 15th December. Check the notice board for updates.\n")

    elif "faculty" in user:
        print("Bot: Faculty information is available through the department office.\n")

    elif "event" in user:
        print("Bot: Upcoming AI Workshop will be held next Friday.\n")

    elif "resource" in user:
        print("Bot: Recommended resources: NPTEL, Coursera, GeeksforGeeks.\n")

    elif "hello" in user or "hi" in user:
        print("Bot: Hello! How can I help you today?\n")

    else:
        print("Bot: Sorry, I don't understand that query.\n")