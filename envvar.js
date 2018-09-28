module.exports = NODE_ENV;

function NODE_ENV(){
	process.env.NODE_ENV="qa";
	return process.env.NODE_ENV;
}