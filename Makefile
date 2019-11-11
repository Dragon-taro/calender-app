default:
	make front/install
	make redux-sample/install
	make server/install

front/install:
	npm --prefix ./front install ./front
	npm --prefix ./front run build

redux-sample/install:
	npm --prefix ./redux-sample install ./redux-sample
	npm --prefix ./redux-sample run build

server/install:
	npm --prefix ./server install ./server
	cp ./server/env/env-local ./server/.env