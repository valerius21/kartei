FROM oven/bun:latest

WORKDIR /app

COPY package.json .
RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "dev", "--port", "3000", "--strictPort", "--host", "0.0.0.0"]