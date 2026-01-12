#!/bin/bash

PORT=${1:-3000}

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo "ngrok not found. Install with: brew install ngrok"
    exit 1
fi

echo "Starting ngrok on port $PORT..."
echo ""

# Start ngrok and capture output
ngrok http $PORT --log=stdout | while read line; do
    # Extract the public URL
    if [[ $line == *"url="* ]]; then
        URL=$(echo $line | grep -o 'url=https://[^ ]*' | cut -d= -f2)
        if [[ -n "$URL" ]]; then
            echo "=========================================="
            echo "ngrok URL: $URL"
            echo ""
            echo "Webhook URL for Lemon Squeezy:"
            echo "$URL/api/webhooks/lemon-squeezy"
            echo ""
            echo "Update this in Lemon Squeezy Dashboard:"
            echo "Settings → Webhooks → Edit → URL"
            echo "=========================================="
        fi
    fi
    echo "$line"
done
