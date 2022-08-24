여러 node들이 한 방향을 가리키는 연결구조.
가장 처음 시작하는 노드를 `head`라고 하며, 가장 마지막 노드를 `tail`이라고 한다.
각 노드들은 본인이 `이전 노드`와 `다음 노드`를 기억한다.

LinkedList가 적용된 예를 살펴보면, 어떤 작업도중에 이전단게로 되돌아가기 위해 단축키 `ctrl+z`로 이전 작업으로 이동할 수있다.
이것을 반복적으로 하면 가장 초기 작업단계, 더 이상 뒤로 갈 수 없다.(`head`)
반대로 ctrl+y 다음 단계로 이동할 수있고 이를 반복하면 마지막에 작업했던 상태로 돌아갈 수 있다.(`tail`)

이처럼 서로 `이전`과 `다음` 단계처럼 연결되어 있는 구조를 `LinkedList`라 한다.
(인터넷에서 이전페이지, 다음페이지 / 한글과 같이 문서프로그램에서의 되돌리기 등 )

### Shortcomings of Arrays
* arryas are fixed in length, so it is hard to add new data when the last element of the array is reached.
* 추가 또는 삭제를 반영하기 위해 배열 요소를 위 또는 아래로 이동해야 하기 때문에 데이터 추가 및 제거도 어렵다.
  * 이러한 문제는 `split()`함수를 사용해서 추가 배열 요소 액세스 가능하다
* JS의 배열의 주요 문제는 배열이 객체로 구현되어 C++, Java와 같은 언어로 구축된 배열보다 효율성이 떨어짐
* 배열에서 수행되는 작업이 실제로 사용하기에는 너무 느리다고 판단되면 LinkedList 대체 데이터 구조로 사용.
* 엘레먼트에 랜덤으로 액세스해야하는 상황을 제외하고는 1차원 배열이 사용되는 모든 상황에서 LinkedList를 사용이 가능
---
### Linked Lists Defined
![Linked](./images/LinkedList.png)
* Linked List는 `node`라고 불리는 객체들의 모음이다.
* 각 node는 객체참고를 사용해서 다음 노드에 연결된다.
* 배열은 Element의 position에 의해 참조되지만, linkedList 엘레먼트는 다른 요소와의 관계로 참조된다.
* `빵`이 `우유` 다음에 온다고 말하지,`빵`은 두번째 위치에 있다고 말하지 않는다.
* The `end of a Linked-List` by pointing to a `null` node.
* Linked-List의 시작점을 표시하는 것은 문제가 될 수 있다.
* LinkedList의 시작을 나타내기 위해 많은 LinkedList구현은 `head`라고 불리는 특별한 노드를 포함하고 있다.
* 새 node를 삽입하기 위해서는 삽입된 node 앞의 node(이전 node)의 링크가 새 node를 가리키도록 변경되고, 새 node의 링크는 삽입 전 이전 node가 가리키던 node로 설정됩니다. 그림에 연결 리스트에 `eggs` 다음에 `cookies`가 추가되는 방식을 보여줍니다.
  [add](./images/Insert_Linked_List.png)
* 배열과 달리 LinkedList에서 element는 메모리에 연속적으로 배치되지 않는다.
* 각 Element는 그 자체를 저장하는 Node와 다음 Element를 가리키는 참조(called Pointer or Link)로 구성된다.
* 기존 배열에 비해 LinkedList 장점 중 하나는 Element를 추가하거나 제거할 때 Element가 이동할 필요가 없다는 것
* 배열은 directly access any element any positioni, LinkedList는 중간 Element에 access 하려면 head에서부터 원하는 element를 찾을 때까지 반복해야한다.

  ## An Object-Based Linked List Design
  * 연결 목록의 디자인은 두 개의 클래스를 만드는 것을 포함합니다. 연결 목록에 노드를 추가하기 위한 Node 클래스를 만들고 노드 삽입, 노드 제거, 목록 표시 및 기타 하우스키핑 기능을 제공하는 LinkedList 클래스를 만듭니다.

  ### The Node Class
  * Node 클래스는 노드의 데이터를 저장하는 element와 연결 목록의 다음 노드에 대한 링크를 저장하는 next의 두 가지 속성으로 구성됩니다. 노드를 생성하기 위해 두 속성의 값을 설정하는 생성자 함수를 사용할 것입니다.
```js
function Node(element) {
    this.element = element;
    this.next = null;
}
```
  ### The Linked List Class
  `LList` 클래스는 LinkedList에 대한 functionality를 제공한다. 이 클래스는 새 노드를 추가하고, 노드를 제거하고, 리스트안에서 특정 데이터 값을 찾는 functions들이 포함되어 있다.LinkedList에서 저장된 유일한 속성은 리스트의 `head`를 나타내는 node이다.
```js
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}
```
### Inserting New Nodes;
* 새 노드를 삽입하려면 앞이나 뒤에 새 노드를 삽입할 노드를 지정해야 합니다.