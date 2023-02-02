/**
 * 할 일 추가
 * @param {string} content - 내용
 * @param {boolean} [completed] - 완료 여부
 * @param {string} [category] - 카테고리
 * @param {string[]} [tags] - 태그들
 * @returns {boolean} - 할 일 추가 성공 여부
 */
function create(content, completed, category, tags) { }

/**
 * 모든 할 일 조회
 * @returns {Todo[]}
 *//**
 * 특정 할 일 조회
 * @param {number} id - 아이디
 * @returns {Todo}
 */
function read(id) { }

/** 할 일 속성 수정 parameter
 * @typedef TodoProperties
 * @type {object}
 * @property {string} [content] - 내용
 * @property {boolean} [completed] - 완료 여부
 * @property {string} [category] - 카테고리
 * @property {string[]} [tags] - 태그들
*/
/**
 * 할 일 속성 수정
 * @param {number} id - 수정할 todo의 아이디
 * @param {TodoProperties} properties
 * @returns {Todo} - 변경된 할 일 객체
 */
 function update(id, properties) { }

/**
 * 모든 할 일 삭제
 * @returns {Todo[]} - 삭제된 할 일 목록
 *//**
 * ID로 특정 할 일 삭제
 * @param {number} id - 아이디
 * @returns {Todo} - 삭제된 할 일
 *//**
 * ID로 특정 할 일의 특정 태그 삭제
 * @param {number} id - 아이디
 * @param {string} tag - 태그
 * @returns {Todo} - 특정 태그가 삭제된 할 일
 *//**
 * ID로 특정 할 일의 모든 태그 삭제
 * @param {number} id - 아이디
 * @param {boolean} removeAllTags - 태그
 * @returns {Todo} - 모든 태그가 삭제된 할 일
 */
function remove() { }