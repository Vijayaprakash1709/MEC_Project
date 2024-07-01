import streamlit as st

# Set page title and favicon
st.set_page_config(
    page_title="Colorful Streamlit Page",
    page_icon="🌈",
)

# Define a custom CSS style with a light green background
css = """
<style>
body {
    background-color: #E0F2E9; /* Light Green */
    font-family: Arial, sans-serif;
}

h1 {
    color: #FF5733;
}

h2 {
    color: #33FF57;
}

p {
    color: #3366FF;
    font-size: 18px;
}

.button {
    background-color: #FF33CC;
    color: white;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
}

.button:hover {

    background-color: #FF0099;
}

</style>
"""

# Inject the custom CSS
st.markdown(css, unsafe_allow_html=True)

# Header
st.title("🌈 Welcome to My Colorful Streamlit Page")

# Subheader
st.header("Let's add some color to your day!")

# Display colorful text
st.write("This is a colorful Streamlit page to brighten your day.")

# Add a colorful button
if st.button("Click Me!"):
    st.success("You clicked the colorful button!")


# Add a colorful chart
st.bar_chart({"Apples": 5, "Bananas": 8, "Oranges": 12}, width=500, height=300)

# Add a colorful footer
st.write(
    """
    <div style="background-color: #FFFF33; padding: 10px; border-radius: 10px;">
        <p style="color: #333333;">Thanks for visiting! Have a colorful day! 🌈</p>
    </div>
    """,
    unsafe_allow_html=True,
)
