
# <center>Intent recognition chatbot</center>
This is a chatbot that uses deep learning and an attention ability to understand the intention of the person it is communicating with. There are of course simpler ways to build a chatbot. Where you can predefine several questions and how the chatbot will answer these questions. However, the English language is incredibly versatile, and one question can be asked in a very large number of different ways. Which makes it impossible for a person to hard code every question in its multitude of different varieties. How we came over this problem is by using a transformer model where “self-attention” is the core idea behind it. 
Self-attention can focus on separate positions of the input sequence in order to calculate the representation of that sequence. This type of architecture has several advantages over RNNs or CNNs.
1.	    It does not make any assumptions over the data’s time-based  relationships. Which is optimal for processing a set of objects
2.	    Where RNNs calculate output in succession, here they are done parallel.
3.	    Distant items can affect each other's output without passing through many RNN-steps, or convolution layers

In short is this a transformer chatbot that uses tensorFlow 2.0 and is trained on data from the comments on reddit. You can interact with the chatbot both through chatting with it or head over to the text to speech side and have a verbal conversation with it. The chatbot is built using python with a backend in Sanic. We choose to build the interface using VUE.js. If you want to use the chatbot for another reason than to have a fun attitude filled conversation with a bot. Maybe use it to answer questions on your website the chatbot can be retrained on the data you wish for it. All you have to do is to input new checkpoints and a tokenizer.

---------------------------------------------------------------------------

#                              <center>Setup</center>
To setup the chatbot and get it working on your local computer I’d recommend the following steps
*	Download the zipfile
*	Create a virtual environment(venv) in the script that can’t be of a higher python version than “python 3.8.5”. And activate the venv
*	Install sanic
*	Install VUE VITE, Vue Router and Vuex
*	Run/install the requirements.txt
*	Make sure to have the training data in “bot/training_1”


---------------------------------------------------------------------------


#                       <center>Running the code</center>
After you’ve completed the setup steps you first run the “main.py” file and then head in to the “frontend” folder to type “npm run dev” for the local host to start and you can start having fun with a chatbot that surely will leave you speechless with laughter once or twice.
