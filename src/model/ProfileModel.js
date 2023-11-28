class ProfileModel {
    constructor() {
        this.token = null;
        this.userId = null;
        this.userLevel = null;
        this.userLevelDetail = null;
        this.uuid = null;

        this.appId = null;
        this.canRedeem = null;
        this.loginChanel = null;
        this.isFbUser = null;
        this.joinDate = null;
        this.locale = null;
        this.platform = null;
        this.line = null;
        this.usercode = null

        this.point = {
            point: 0,
            time: null,
        }
        this.pdpa = {
            privacy: null,
            terms: null,
        }
    }
  
    setDataFromApi() {
        this.token = data.token;
        this.userId = data.userId;
        this.userLevel = data.userLevel;
        this.userLevelDetail = data.userLevelDetail;
        this.uuid = data.uuid;

        this.appId = data.appId;
        this.canRedeem = data.canRedeem;
        this.loginChanel = data.channel;
        this.isFbUser = data.isFbUser;
        this.joinDate = data.joinDate;
        this.locale = data.locale;
        this.platform = data.platform;
        this.line = data.line;

        this.point = {
            point: data.updated_points.points,
            time: data.updated_points.time,
        }
        this.pdpa = {
            privacy: data.DataPrivacy,
            terms: data.TermAndCondition,
        };
        this.usercode = data?.usercode ?? null
    }
}
module.exports = {
    ProfileModel
}