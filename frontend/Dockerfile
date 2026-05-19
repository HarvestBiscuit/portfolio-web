FROM node:22-slim
WORKDIR /app

# 依存関係の定義ファイルをコピーしてインストール
COPY package*.json ./
RUN npm install

# 残りのソースコードをコピー
COPY . .

# 開発サーバーを起動
CMD ["npm", "run", "dev"]