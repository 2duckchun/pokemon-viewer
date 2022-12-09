# 프로젝트명 : Pokemon viewer

포켓몬의 스텟과 앞, 뒤 사진을 볼 수 있고, 포켓몬을 확인한 시간을 기록하는 앱입니다.


## 제작목적

1. 이 프로젝트는 react 및 각종 hook, axios 및 각종 frontend 기술에 대해 익히기 위해 제작되었습니다.
2. 또한 포켓몬의 사진을 보고 클릭도 해보면서 지친 현대인에게 약간의 동심과 재미를 불러일으키는 것에 가치를 두고 있습니다.

## 사용기술
```
main : react
Hook : useState, useEffect
library : react-router-dom, axios
```

### 기능 구현방법
1. [비동기 통신] axios를 이용해 포켓몬스터 공식 api의 데이터를 요청한 후 자료를 가공하여 브라우저에 렌더링했습니다.
2. [포켓몬 데이터 모달창] api의 데이터를 받아온 뒤, html attribute에 dataset을 추가하는 방식으로 모달창을 구현했습니다. 
3. [next, previous 버튼] 각 버튼을 누르면 다음 포켓몬, 이전 포켓몬을 볼 수 있도록 쿼리스트링을 이용하여 api에 요청을 보냈습니다.
4. [api 저장 기능] log나 home 화면에 접속한 뒤 pokemon-viewer로 넘어와도 현재 확인중인 포켓몬을 재확인할 수 있도록 로직을 구현했습니다.


## 제작하며 얻게된 교훈
1. 규모가 간단한 앱인데도 불구하고 상태 관리의 필요성을 느끼게 되었으며, 이것을 제작한 뒤로 redux를 배우게 되었음.
2. CSS의 세부사항에 대해 주니어 단계에서 공부를 열심히 했다는 것은 스스로 느껴지지만 아직 많은 아웃풋을 내지 않아 익숙하지가 않았음.
3. 비동기에서 useEffect를 잘 활용해야 무한 요청이 일어나지 않는다는 것을 제작해보며 스스로 깨우치게 됨. 
