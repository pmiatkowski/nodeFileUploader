const LIMIT_MB = process.env.MAX_FILE_SIZE || '1';

const fileSizeLimit = () => {
	return +LIMIT_MB * 1024 * 1024;
};

module.exports = {
	LIMIT_MB,
	fileSizeLimit,
};
