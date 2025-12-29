#!/bin/bash
# Render build script for InsightFlow backend

# Upgrade pip to latest version
pip install --upgrade pip

# Install dependencies with binary wheels only (no source compilation)
pip install --only-binary=:all: -r requirements.txt || pip install -r requirements.txt

echo "✅ Build completed successfully!"
