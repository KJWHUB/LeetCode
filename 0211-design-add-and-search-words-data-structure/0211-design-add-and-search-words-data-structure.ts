class TrieNode {
    isEnd: boolean
    children: Map<string, TrieNode>

    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class WordDictionary {
    rootNode: TrieNode

    constructor() {
        this.rootNode = new TrieNode()
    }

    addWord(word: string): void {

        // root 트리 노드를 초기값 설정
        let currentNode = this.rootNode;

        // 워드의 char 단위 마다 node 에 연결이 있는지 검사후 추가
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode())
            }
            currentNode = currentNode.children.get(char);
        }

        // 마지막 노드에 true 처리
        currentNode.isEnd = true;
    }

    search(word: string): boolean {
        const searchHelper = (currentNode: TrieNode, i: number) => {
            if (i === word.length) return currentNode.isEnd

            const char = word[i]

            // '.' 은 어느 문자와도 스왑 되기때문에 '.' 이전의 인덱스에서 자식의 모든 경우를 실행해야한다.
            if (char === '.') {
                // 1. 다음 단어의 갯수만큼 반복문 실행
                // 2. 실행도중 일치하는 결과가 있을시 true 얼리리턴
                for (const c of currentNode.children.keys()) {
                    const childNode = currentNode.children.get(c)
                    if (searchHelper(childNode, i + 1)) return true
                }

                // 3. 모두 실패시 false 리턴
                return false
            } else {
                if (!currentNode.children.has(char)) return false

                return searchHelper(currentNode.children.get(char), i + 1)
            }
        }

        return searchHelper(this.rootNode, 0)
    }
}



/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */