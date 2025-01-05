class TrieNode {
    constructor() {
        this.children = new Map()
        this.word = null    // isEnd 대신 실제 단어를 저장
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    addWord(word) {
        let node = this.root
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode())
            }
            node = node.children.get(char)
        }
        node.word = word    // 단어 전체를 저장
    }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(board, words) {
    const m = board.length
    const n = board[0].length
    const result = new Set()
    
    // 보드보다 긴 단어는 미리 필터링
    words = words.filter(word => word.length <= m * n)
    
    const trie = new Trie()
    for (const word of words) {
        trie.addWord(word)
    }

    const dfs = (r, c, node) => {
        if (r < 0 || r >= m || c < 0 || c >= n || !node.children.has(board[r][c])) {
            return
        }

        const char = board[r][c]
        const nextNode = node.children.get(char)
        
        if (nextNode.word) {
            result.add(nextNode.word)
        }

        // 현재 칸의 문자를 임시 저장
        board[r][c] = '#'   // visited 배열 대신 보드 직접 수정

        // 4방향 탐색
        dfs(r + 1, c, nextNode)
        dfs(r - 1, c, nextNode)
        dfs(r, c + 1, nextNode)
        dfs(r, c - 1, nextNode)

        // 원래 문자로 복구
        board[r][c] = char
        
        // 백트래킹 최적화: 더 이상 필요없는 트라이 노드 제거
        if (nextNode.children.size === 0) {
            node.children.delete(char)
        }
    }

    // 보드 탐색
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            dfs(r, c, trie.root)
        }
    }

    return Array.from(result)
}