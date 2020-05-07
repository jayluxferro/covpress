module.exports = {
  attributes: {
    email: {
      type: 'string',
      required: true
    },
    fullname: {
      type: 'string',
      required: true
    },
    isActive: {
      type: 'boolean',
      defaultsTo: true
    },
    roles: {
      type: 'json',
      defaultsTo: {

      },
      example: {
        cms: {
          authorized: true
        }
      }
    }
  }
}
