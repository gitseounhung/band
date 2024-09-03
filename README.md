# npm workspace + react 구성방법
- 참조. https://abangpa1ace.tistory.com/entry/Craco-CracoCreate-React-App-Configuration-Override-%EB%9E%80
- craco (Create React App Configuration Override)
```
루트로 이동
npm --workspace @zio/main add --dev @craco/craco

@zio/main/package.json 변경
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"
  }
}

@zio/main/craco.config.js 파일생성


실행
npm run start --workspace 
  @zio/main
  packages/main 과 동일
```

# git안에 git
```
초기설치
git submodule add https://github.com/jellypower/VulkanExam.git 폴더명

새로운내용 갖어오기 (로컬에서 수정한게 있어도 서버것으로 덮어씀 : 주의할 것)
git submodule init //.git에게 어떠한 서브모듈이 있는지 등록
git submodule update // 등록된 서브모듈로부터 자동으로 pull + fetch

수정한거 서버에 push하기

```
## 참고
- submodule 내부에 많은 파일이 변해도 root에서는 하나의 파일만 변경된것으로 생각
- root에서 submodule 내부를 추적하지 않는다.