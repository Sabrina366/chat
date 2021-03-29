from functions import *

EPOCHS = 5

model.fit(dataset, epochs=EPOCHS, callbacks=[cp_callbacks])