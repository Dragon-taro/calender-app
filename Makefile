default:
	make front/install
	make server/install

front/install:
	npm --prefix ./front install ./front
	npm --prefix ./front run build

server/install:
	npm --prefix ./server install ./server
	cp ./server/env/env-local ./server/.env