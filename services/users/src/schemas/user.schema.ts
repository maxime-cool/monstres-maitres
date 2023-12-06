import S from 'fluent-json-schema'

export const userCreateSchema = {
    body: S.object()
    .prop('username').required()
    .prop('password').required()
    .prop('email').required(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object()
}