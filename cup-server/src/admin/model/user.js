module.exports = class extends think.Model {
  get relation() {
    return {
      role: {
        type: think.Model.MANY_TO_MANY,
        rModel: 'user_role',
        rfKey: 'role_id'
      },
      org: think.Model.BELONG_TO
    };
  }
};
