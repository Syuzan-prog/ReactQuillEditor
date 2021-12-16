import { createSelector } from 'reselect';

import {
    ACCOUNT_AVATAR_FIELD_NAME,
    ACCOUNT_FULL_NAME_FIELD_NAME,
    ACCOUNT_INSTITUTION_FIELD_NAME,
    ACCOUNT_DEPARTMENT_FIELD_NAME,
    ACCOUNT_ORCID_ID_FIELD_NAME,
    ACCOUNT_EMAIL_FIELD_NAME,
    ACCOUNT_RECOVERY_EMAIL_FIELD_NAME,
    ACCOUNT_PUSH_NOTIFICATIONS_ALERT_FIELD_NAME,
    ACCOUNT_SYSTEM_MESSAGES_FREQUENCY_FIELD_NAME,
    ACCOUNT_RESEARCH_ADMIN_MESSAGE_FREQUENCY_FIELD_NAME,
    ACCOUNT_TWO_FACTOR_AUTH_FIELD_NAME,
    ADMIN_USER_TYPES,
} from 'constants/settings.constants';

export const getAccount = (state) => state.account;

export const getIsLoggedIn = createSelector(
    getAccount,
    (account) => account.isLoaded
);

export const getIsAdmin = createSelector(
    getAccount,
    (account) => ADMIN_USER_TYPES.includes(account.usertype)
);

export const getFullName = createSelector(
    getAccount,
    (account) => account[ACCOUNT_FULL_NAME_FIELD_NAME]
);

export const getInstitution = createSelector(
    getAccount,
    (account) => account[ACCOUNT_INSTITUTION_FIELD_NAME]
);

export const getDepartment = createSelector(
    getAccount,
    (account) => account[ACCOUNT_DEPARTMENT_FIELD_NAME]
);

export const getOrcidId = createSelector(
    getAccount,
    (account) => account[ACCOUNT_ORCID_ID_FIELD_NAME]
);

export const getPushNotificationsSetting = createSelector(
    getAccount,
    (account) => account[ACCOUNT_PUSH_NOTIFICATIONS_ALERT_FIELD_NAME]
);


export const getSystemMessagesFrequencySetting = createSelector(
    getAccount,
    (account) => account[ACCOUNT_SYSTEM_MESSAGES_FREQUENCY_FIELD_NAME]
);

export const getResearchAdminMessagesFrequencySetting = createSelector(
    getAccount,
    (account) => account[ACCOUNT_RESEARCH_ADMIN_MESSAGE_FREQUENCY_FIELD_NAME]
);

export const getTwoFactorAuthSetting = createSelector(
    getAccount,
    (account) => account[ACCOUNT_TWO_FACTOR_AUTH_FIELD_NAME]
);

export const getAvatarUrl = createSelector(
    getAccount,
    (account) => account[ACCOUNT_AVATAR_FIELD_NAME]
);

export const getEmail = createSelector(
    getAccount,
    (account) => account[ACCOUNT_EMAIL_FIELD_NAME]
);

export const getRecoveryEmail = createSelector(
    getAccount,
    (account) => account[ACCOUNT_RECOVERY_EMAIL_FIELD_NAME]
);

export const getIsRecoveryEmailVerified = createSelector(
    getAccount,
    (account) => account.recoveryEmailVerified
);

export const getAccountId = createSelector(
    getAccount,
    (account) => account.id
);

export const getAccountPublications = createSelector(
    getAccount,
    ({ includedPublications, excludedPublications }) => ({
        included: includedPublications,
        excluded: excludedPublications,
    })
);

export const getAccountUpdateInitialState = createSelector(
    getAccount,
    (account) => ({
        [ACCOUNT_EMAIL_FIELD_NAME]: account.email,
    })
);

export const getPersonalDetailsInitialValues = createSelector(
    getFullName,
    getInstitution,
    getDepartment,
    getOrcidId,
    (fullName, institution, department, orcidId) => ({
        [ACCOUNT_FULL_NAME_FIELD_NAME]: fullName,
        [ACCOUNT_INSTITUTION_FIELD_NAME]: institution,
        [ACCOUNT_DEPARTMENT_FIELD_NAME]: department,
        [ACCOUNT_ORCID_ID_FIELD_NAME]: orcidId,
    })
);

export const getEmailSettingsInitialValues = createSelector(
    getEmail,
    getRecoveryEmail,
    (email, recoveryEmail) => ({
        [ACCOUNT_EMAIL_FIELD_NAME]: email,
        [ACCOUNT_RECOVERY_EMAIL_FIELD_NAME]: recoveryEmail,
    })
);

export const getAlertSettingsInitialValues = createSelector(
    getPushNotificationsSetting,
    getSystemMessagesFrequencySetting,
    getResearchAdminMessagesFrequencySetting,
    (pushNotifications, systemMessages, researchAdminMessages) => ({
        [ACCOUNT_PUSH_NOTIFICATIONS_ALERT_FIELD_NAME]: pushNotifications,
        [ACCOUNT_SYSTEM_MESSAGES_FREQUENCY_FIELD_NAME]: systemMessages,
        [ACCOUNT_RESEARCH_ADMIN_MESSAGE_FREQUENCY_FIELD_NAME]: researchAdminMessages,
    })
);

export const getSecuritySettingsInitialValues = createSelector(
    getTwoFactorAuthSetting,
    (twoFactorAuthSetting) => ({
        [ACCOUNT_TWO_FACTOR_AUTH_FIELD_NAME]: twoFactorAuthSetting,
    })
);
