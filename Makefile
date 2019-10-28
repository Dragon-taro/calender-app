default:
	make fron
	make server

front:
	npm --prefix ./front install ./front
	npm --cwd ./front run build

server:
	npm --prefix ./server install ./server