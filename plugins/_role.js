let handler = m => m

handler.before = function (m) {
    let user = global.DATABASE.data.users[m.sender]
    let role = (user.level <= 3) ? 'Wibu dadakan V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Wibu dadakan IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Wibu dadakan III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Wibu dadakan II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Wibu dadakan I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Wibu nolep V'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'Wibu nolep IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Wibu nolep III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Wibu nolep II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Wibu nolep I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Wibu Newbie V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Wibu Newbie IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Wibu Newbie III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Wibu Newbie II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Wibu Newbie I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? 'Grand Wibu Newbie V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Grand Wibu Newbie IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Grand Wibu Newbie III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Grand Wibu Newbie II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Grand Wibu Newbie I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Wibu Menengah V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Wibu Menengah IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Wibu Menengah III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Wibu Menengah II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Wibu Menengah I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Wibu Elite V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Wibu Elite IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Wibu Elite III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Wibu Elite II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Wibu Elite I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Wibu Bangsawan V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Wibu Bangsawan IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Wibu Bangsawan III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Wibu Bangsawan II'
                                                                                                                                            : ((user.level >= 100) && (user.level <= 103)) ? 'Wibu Bangsawan I'
                                                                                                                                                : 'THE KING OF WIBU'
    user.role = role
    return true
}

module.exports = handler
