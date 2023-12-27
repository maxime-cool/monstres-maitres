import S from 'fluent-json-schema'

export const roundsCreateSchema = {
    body: S.object()
    .prop('p1').required()
    .prop('p2').required()
    .prop('monstre_p1').required()
    .prop('monstre_p2').required(),
    queryString: S.object(),
    params: S.object()
    .prop('match_id').required(),
    headers: S.object()
}