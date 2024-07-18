import pyttsx3
imoort speech_recognition as sr

engine =  pyttsx3.init('sapi5')
voices = engine.getProperty('voices')
print(voices[0].id)
engine.setProperty('voices',voices[0].id)


def speak(audio):
    engine.say(audio)
    print(audio)
    engine.runAndWait()


def takecommand():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("listening...")
        r.pause_threshold = 1
        audio = r.listen(source)


if __name__== "__main__":
    speak('hello sir')