import S from 'fluent-json-schema'

export const matchCreateSchema = {
    body: S.object()
    .prop('player1').required()
    .prop('player2').required(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object()
}