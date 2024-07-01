import streamlit as st
import io
import numpy as np
from PIL import Image
import keras.utils as image
from keras.models import load_model

SKIN_CLASSES = {
    0: 'Actinic Keratoses (Solar Keratoses) or intraepithelial Carcinoma (Bowen’s disease)',
    1: 'Basal Cell Carcinoma',
    2: 'Benign Keratosis',
    3: 'Dermatofibroma',
    4: 'Melanoma',
    5: 'Melanocytic Nevi',
    6: 'Vascular skin lesion'
}

def findMedicine(pred):
    if pred == 0:
        return "fluorouracil"
    elif pred == 1:
        return "Aldara"
    elif pred == 2:
        return "Prescription Hydrogen Peroxide"
    elif pred == 3:
        return "fluorouracil"
    elif pred == 4:
        return "fluorouracil (5-FU):"
    elif pred == 5:
        return "fluorouracil"
    elif pred == 6:
        return "fluorouracil"

def detect_skin_disease(file):
    imagePil = Image.open(io.BytesIO(file.read()))
    imageBytesIO = io.BytesIO()
    imagePil.save(imageBytesIO, format='JPEG')
    imageBytesIO.seek(0)
    path = imageBytesIO

    # Replace 'your_model.h5' with the actual path to your trained model
    model = load_model('C:\\Users\\vijay\\Downloads\\model.h5')


    img = image.load_img(path, target_size=(224, 224))
    img = np.array(img)
    img = img.reshape((1, 224, 224, 3))
    img = img / 255
    prediction = model.predict(img)
    pred = np.argmax(prediction)
    disease = SKIN_CLASSES[pred]
    accuracy = prediction[0][pred]
    accuracy = round(accuracy * 100, 2)
    medicine = findMedicine(pred)

    return {
        "detected": False if pred == 2 else True,
        "disease": disease,
        "accuracy": accuracy,
        "medicine": medicine,
        "img_path": file.name,
    }

def main():
    st.title("Skin Disease Detection App")

    page = st.sidebar.selectbox("Select a page", ["Home", "Sign In", "Sign Up", "Dashboard", "Detect"])

    if page == "Home":
        st.header("Welcome to Skin Disease Detection App")
        # Add content for the home page

    elif page == "Sign In":
        st.header("Sign In")
        # Add content for the sign-in page

    elif page == "Sign Up":
        st.header("Sign Up")
        # Add content for the sign-up page

    elif page == "Dashboard":
        st.header("Dashboard")
        # Add content for the dashboard page

    elif page == "Detect":
        st.header("Skin Disease Detection")
        file = st.file_uploader("Upload an image", type=["jpg", "jpeg", "png"])

        if file is not None:
            result = detect_skin_disease(file)
            st.image(file, caption="Uploaded Image", use_column_width=True)
            st.subheader("Detection Results:")
            st.write(f"Disease: {result['disease']}")
            st.write(f"Accuracy: {result['accuracy']}%")
            st.write(f"Medicine: {result['medicine']}")
            if result["detected"]:
                st.success("Skin disease detected!")
            else:
                st.info("No skin disease detected.")

if __name__ == "__main__":
    main()
