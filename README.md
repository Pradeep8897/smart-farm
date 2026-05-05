# AI-Based Intelligent Smart Farming Decision Support System

## Overview
A complete, modular, scalable web application that helps farmers make intelligent decisions using AI, market data, weather, and analytics.

## Setup Instructions

1. **Prerequisites**
   Ensure you have Python 3 installed on your system.

2. **Installation**
   Open your terminal in the root folder and run:
   ```bash
   pip install -r requirements.txt
   ```
   *(Note: The dependencies have already been installed in the local `venv` during setup).*

3. **Running the Application**
   Start the full-stack system (both backend and frontend) by running:
   ```bash
   .\venv\Scripts\python run.py
   ```
   If you aren't using the virtual environment, simply use:
   ```bash
   python run.py
   ```

4. **Access the System**
   Open your browser and navigate to: [http://127.0.0.1:5000](http://127.0.0.1:5000)

## Architecture
- **Backend**: Python Flask REST API with Blueprints.
- **Frontend**: React.js with Hooks and Tailwind CSS. Served directly via Flask.
- **Database**: SQLite (managed via SQLAlchemy ORM).
- **AI Models**: Placeholder structures for TensorFlow/Keras and scikit-learn.
