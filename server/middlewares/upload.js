const unggah = require('unggah')

/* istanbul ignore next */
const storage = unggah.s3({
  endpoint: 's3.ap-southeast-1.amazonaws.com',
  accessKeyId: "AKIAJ22PJE64QNPSJOIQ",
  secretAccessKey: "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",
  bucketName: 'delivereebid-hacktiv8',
  rename: (req, file) => {
    return `${Date.now()}-${file.originalname}`
  }
})

/* istanbul ignore next */
const upload = unggah({
  limit: {
        fileSize: 1e6
    },
    storage: storage
})

module.exports = upload