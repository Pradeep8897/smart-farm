import os
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout

def train_dummy_model():
    print("Generating synthetic data for CNN...")
    # Generate synthetic image data (num_samples, width, height, channels)
    # We use small dataset size to make training fast
    num_samples = 100
    X_train = np.random.rand(num_samples, 224, 224, 3).astype('float32')
    
    # Generate random labels for 4 classes
    y_train = np.random.randint(0, 4, size=(num_samples,))
    y_train_cat = tf.keras.utils.to_categorical(y_train, num_classes=4)

    print("Building CNN Model...")
    model = Sequential([
        Conv2D(16, (3, 3), activation='relu', input_shape=(224, 224, 3)),
        MaxPooling2D(2, 2),
        Conv2D(32, (3, 3), activation='relu'),
        MaxPooling2D(2, 2),
        Flatten(),
        Dense(64, activation='relu'),
        Dropout(0.5),
        Dense(4, activation='softmax')
    ])

    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    
    print("Training CNN Model (1 epoch for speed)...")
    model.fit(X_train, y_train_cat, epochs=1, batch_size=32)

    model_path = os.path.join(os.path.dirname(__file__), 'cnn_model.h5')
    model.save(model_path)
    print(f"Model successfully saved to {model_path}")

if __name__ == '__main__':
    train_dummy_model()
