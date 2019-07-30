<style lang="scss">
  @import '../assets/css/timeline.css';  
</style>

<template>
  <div class="timeline-frame">
    <v-toolbar>
      <v-toolbar-title>dev story</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text @click="info">info</v-btn>
        <v-btn text @click="viewProj1">project1</v-btn>
        <v-btn text @click="viewProj2">project2</v-btn>
      </v-toolbar-items>

      <!-- <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template> -->
    </v-toolbar>
    <div id="skill-info">
      <v-card
    
    class="mx-auto"
  >   

    <v-list two-line>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">name</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>이재훈</v-list-item-title>
          <v-list-item-subtitle>LEE JAE HOON</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      
      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">phone</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>010-2245-5126</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      
      <v-divider inset></v-divider>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">mail</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>dlwognscap@gmail.com</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    
    <v-list two-line id="info-frame2">
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">보유기술</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>programming language / methodology</v-list-item-title>
          <v-list-item-subtitle>PHP , Javascript, HTML5, CSS3</v-list-item-subtitle>
          <v-list-item-title>Framework / Library</v-list-item-title>
          <v-list-item-subtitle>Codeigniter ,Xdebug, Bootstrap, Jquery, Vuejs</v-list-item-subtitle>
          <v-list-item-title>Server</v-list-item-title>
          <v-list-item-subtitle>Mysql , MongoDB, mariadb , Apache</v-list-item-subtitle>
          <v-list-item-title>Environment</v-list-item-title>
          <v-list-item-subtitle>AWS, Linux, Windows, Wsl</v-list-item-subtitle>
          <v-list-item-title>Etc</v-list-item-title>
          <v-list-item-subtitle>Github, Jira</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon color="indigo">현재 사용된기술</v-icon>
          <v-list-item-title>vue,vuetify,webpack / nodejs,express</v-list-item-title>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

  </v-card>
    </div>
    <div id="proj1">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-card>
            <v-card-title class="cyan lighten-1">
              <h4 class="card-title  white--text font-weight-light">2-1. 스냅푸시 <a href="http://snappush.snapcompany.net/" target="_sub">( 홈페이지 )</a></h4>
              <h5 class=" font-weight-light">개발 및 고도화: 2018.07 ~ 2019.08</h5>
            </v-card-title>
            <v-container>
              <v-layout wrap>
                <v-flex
                  xs12
                  md12
                >
                  <p> <span class="bold">작업 포지션:</span> 어드민 (프론트,백,퍼블리싱) </p>
                  <p> <span class="bold">프로젝트 소개:</span> </p>
                  <ul style="margin-bottom:20px;">
                    <li>이전의 솔루션은 만들어진 알고리즘이라면 이번 솔루션은 고객사가 알고리즘을 만드는 솔루션</li>
                    <li>고객사가 만든 알고리즘에 부합한 유저에게 쇼핑몰 내에서 로컬알림,fcm,카카오톡,sms,바이앱스,이메일을 전송시켜준다. </li>
                    <li>전송한 알림과 알림을 누른 고객들의 통계 제공</li>
                    <li>드래그앤 드롭으로 만들어진 에디터로 간편하게 컨텐츠를 만들어 알림 클릭시 상품추천,쿠폰,이벤트 등 다양하게 보여줌</li>
                  </ul>


                  <p>1.스냅푸시</p>
                    <ul>
                      <li>볼륨이 작은 프로젝트는 아니여서 기획이 계속 변경되거나 생각지 못한 문제가 발생</li>
                    </ul>
                    <p>1.1 문제점</p>
                      <ul>
                        <li>알람 생성시 5단계로 샌드박스로 구성된 팝업인데 한 화면에서 실시간으로 바뀌어야할 요소들이 너무 많아 기존 html,jquery로는 감당하기 힘듦.</li>
                        <li>알림 클릭시 보여지는 컨텐츠의 종류가 한정적이여서 자유도가 떨어지고 고객사의 불만이 많아짐</li>
                        <li>통계에 쓰이는 유저의 로그 데이터가 가장 문제였는데 고객사 하나당 하루 몇십만건 까지 쌓아야 해서 결국 테이블 하나로 버티질 못함.</li>
                      </ul>
                    <p>1.2 해결책</p>
                      <ul>
                        <li>vue를 이용하여 작업 간소화</li>
                        <li>고객사가 자주 쓰며 인기있는 컨테츠를 모듈화 시켜 드래그 앤 드롭으로 컨텐츠를 끌어다 커스텀 할 수 있는 에디터 제작</li>
                        <li>로그성 디비는 mysql이 아닌 mongodb에 고객사+날짜+알람 별로 컬렉션을 생성하여 쌓고 통계에 보여질 데이터들을 cron으로 매일 캐싱, 6개월이 지난 데이터는 서버에 백업후 제거</li>
                      </ul>
                    <p>1.3 유지보수 및 추가 개발</p>
                      <ul>
                        <li>알람의 채널 증설(카카오,바이앱스,이메일)</li>  
                      </ul>

                  <div>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/html.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/javascript.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/jquery.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/css3.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/boot.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/php.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/xdebug.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ci.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ubuntu.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/aws.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/s3.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/mongo.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/vue.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/git.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/jira.png')" alt=""/></span>
                  </div>

                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

          <v-card>
            <v-card-title class="amber lighten-1 justify-end">
              <h4 class="card-title  white--text font-weight-light">2-2. 스냅알(개인 맞춤 상품 추천)</h4>
              <h5 class=" font-weight-light">개발: 2018.03 ~ 2018.06, 고도화: 2018.08 ~ 2019.08</h5>
            </v-card-title>
            <v-container>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <p > <span class="bold">작업 포지션:</span> 프론트,백,퍼블리싱 </p>
                  <p> <span class="bold">프로젝트 소개:</span> </p>
                  <ul style="margin-bottom:20px;">
                    <li>단독 프로젝트, 쇼핑몰에 보여지는 요소들은 모두 iframe사용 </li>
                    <li>고객사가 설정한 알고리즘 기반으로 슬라이드 배너형태로 상품 노출</li>
                    <li>고객사가 설정한 알고리즘 기반으로 상품 이미지에 설정한 추천 이미지 노출</li>
                    <li>에디터로 어드민 페이지로 제작, 쇼핑몰에 설정한 페이지를 이벤트 페이로 보여줌</li>
                  </ul>

                  <p>1.개인화 추천 슬라이드</p>
                    <ul>
                      <li>쇼핑몰의 카테고리별로 슬라이드를 생성할수 있으며 알고리즘별 탭을 최대 5개까지 생성 가능</li>
                      <li>유저의 행동패턴, 유저의 구매 패턴 등등 유저와 비슷한 유저들의 구매기록으로 상품을 추천</li>
                    </ul>
                    <p>1.1 문제점</p>
                      <ul>
                        <li>이전 프로젝트에서 수집한 데이터 기반으로 상품을 추천하지만 데이터의 양이 많아 쿼리의 부하가 심해짐</li>
                      </ul>
                    <p>1.2 해결책</p>
                      <ul>
                        <li>최대한 질문과 아는 지식을 동원해 쿼리튜닝을 해보았다. 인덱스를 걸어주고 서브쿼리를 최대한 조인으로 변경. 쿼리는 최대한 나눔</li>
                      </ul>
                    <p>1.3 유지보수 및 추가 개발</p>
                      <ul>
                        <li>지속적인 알고리즘 추가</li>  
                      </ul>

                    <p>1.개인화 추천 스티커</p>
                    <ul>
                      <li>쇼핑몰에 보이는 모든 상품 이미지에 고객사가 설정한 이미지를 알고리즘과 매칭된 상품에 노출</li>
                      <li>이미지 노출로 인하여 조금더 상품에 관심을 유도함</li>
                    </ul>
                    <p>1.1 문제점</p>
                      <ul>
                        <li>호스팅사,쇼핑몰 마다 html의 마크업이 달라 추천된 해당 이미지를 찾기가 힘듦</li>
                      </ul>
                    <p>1.2 해결책</p>
                      <ul>
                        <li>쇼핑몰별 마크업(css 선택자)을 db에 저장하여 찾음. 단 이것도 사람이 한번은 해야한다는 단점이 있다.</li>
                      </ul>

                  <div>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/html.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/javascript.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/jquery.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/css3.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/boot.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/php.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/xdebug.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ci.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ubuntu.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/aws.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/s3.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/git.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/jira.png')" alt=""/></span>
                  </div>
                  
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

          <v-card>
            <v-card-title class="purple lighten-2">
              <h4 class="card-title  white--text font-weight-light">1-3. 스냅핏<a href="http://www.snapfit.co.kr/" target="_sub">( 홈페이지 )</a></h4>
              <h5 class="day-title font-weight-light">개발: 2017.09 ~ 2018.05, 유지보수: 2018.05~2019.08</h5>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-flex xs12 md12>
                  <p > <span class="bold">작업 포지션:</span> 프론트,백,퍼블리싱 </p>
                  <p> <span class="bold">프로젝트 소개:</span> </p>
                  <ul style="margin-bottom:20px;">
                    <li>쇼핑몰 사이즈 차트를 간단한 설정으로 간편하게 생성 및 사이트 연동을 시켜주는 빌더</li>
                    <li>쇼핑몰 유입 유저의 사이즈 추천 및 상품 추천</li>
                    <li>쇼핑몰의 상품정보는 크롤링</li>
                  </ul>

                  <p><span class="bold">작업 스토리:</span></p>
                    <p>1.어드민 (사이즈 차트 빌더)(프론트,백)</p>
                    <ul>
                      <li>쇼핑몰별 사이즈 차트 디자인을 받아 html로 퍼블리싱(본인) 하여 요소별로 템플릿화</li>
                      <li>요소별로 쇼핑몰 회사에서 저장하여 언제든지 재활용 가능케 함</li>
                      <li>저장된 요소들을 불러와 단계별로 요소를 클릭하여 차트를 html로 만들수있게 작업</li>
                      <li>만들어진 html을 진열될 상품 에디터에 삽입</li>
                    </ul>
                    <p>1.1 문제점</p>
                      <ul>
                        <li>만들어진 html이기 떄문에 기존 쇼핑몰의 css와 90프로 이상 충돌</li>
                        <li>차트 이미지는 충돌이 되진 않았지만 모바일 접속이 90프로가 넘는 쇼핑몰에선 반응형이 되지 않아 불편.</li>
                        <li>iframe 변경후 문제는 워낙에 모바일 디바이스가 많다보니 반응형이 제대로되지 않는 문제. 특히 높이값이 가장 문제.</li>
                      </ul>
                    <p>1.2 해결책</p>
                      <ul>
                        <li>사이즈 차트를 이미지로 저장시킴과 동시에 aws s3에 자동업로드(제공된 이미지 주소는 cdn주소),이미지 주소가 담긴 html코드 제공</li>
                        <li>css충돌 방지 및 반응형을 위해 iframe으로 변경, 차트를 생성과 동시에 만들어진 html을 s3에 업로드 시켜 업로드된 주소를 iframe과 같이 html코드 제공</li>
                        <li>iframe 의 높이갚을 잡아주는게 가장 문제였다. 이걸 잡기 위해 postMessage를 통해 iframe 내부의 높이값을 전달 시켜 미리 심어둔 스크립트로 iframe 높이값을 변경</li>
                      </ul>
                    <p>1.3 유지보수 및 추가 개발</p>
                      <ul>
                        <li>차트복사</li>  
                        <li>멀티 및 트리플 차트 생성</li>
                      </ul>

                    <p>2.사이즈 추천 (사이즈 차트 빌더)(프론트,백)</p>
                    <ul>
                      <li>쇼핑몰 주문페이지에 스크립트를 심어 결제완료시 유저의 주문정보 수집</li>
                      <li>빌더 아래에 체형 입력란을 만들어 유저의 체형정보 및 사이즈 수집</li>
                      <li>현재 보고있는 상품의 사이즈를 쿠키에 저장</li>
                      <li>빌더를 이용한 차트가 들어가있는 상품 페이지에선 상품의 사이즈 정보를 알수있기 때문에 이전에 보았던 상품과 사이즈 비교 가능 </li>
                    </ul>
                    <p>2.1 문제점</p>
                      <ul>
                        <li>쇼핑몰에 적게는 몇천 많게는 몇십만의 트래픽이 생기며 그에따른 유저 정보를 RDBMS에 담기가 힘듬</li>
                      </ul>
                    <p>2.2 해결책</p>
                      <ul>
                        <li>쇼핑몰,유저 별 고유값으로 redis로 캐싱</li>
                      </ul>

                  <div style="margin-top:20px;">
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/html.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/javascript.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/jquery.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/css3.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/boot.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/php.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/xdebug.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ci.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ubuntu.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/aws.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/s3.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/redis.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/git.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/jira.png')" alt=""/></span>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
               
          
        
          

        
      </v-timeline>
    </div>

    <div id="proj2">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          color="purple lighten-2"
          fill-dot
          right
        >
          <v-card>
            <v-card-title class="purple lighten-2">
              <h4 class="card-title  white--text font-weight-light">2-1. 클라이언트 포트폴리오 홈페이지<a href="http://www.sigc.co.kr" target="_sub">( 홈페이지 )</a></h4>
              <h5 class="day-title font-weight-light">2017.02 ~ 2017.02</h5>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-flex xs12 md12>
                  <p>작업 요약: 프론트단 개발 </p>
                  <p>작업 스토리:</p>
                  <p>첫 회사로 들어가자마자 시작한 프로젝트. 간단한 포트폴리오 홈페이였다. 신입이라 크게 어려운 업무는 없었지만 많이 써보지 못한 css,javascript,php,codeigniter 에 익숙해지는 시간을 가졌던거 같다.</p>

                  <p>그래도 기존에 배운 mvc패턴이 코드이그나이터에 있어서 더 빨리 적응. 처음 오자마자 우분투에 아파치 설정까지.. 우분투 울렁증에서 벗어나고자 이리저리 많이 공부했었다.</p>

                  <div>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/html.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/javascript.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/css3.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/php.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ci.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ubuntu.jpg')" alt=""/></span>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          
        </v-timeline-item>

        <v-timeline-item
          color="amber lighten-1"
          fill-dot
          left
          small
        >
          <v-card>
            <v-card-title class="amber lighten-1 justify-end">
              <h4 class="card-title  white--text font-weight-light">2-2. 골프장 플랫폼 및 커뮤니티 홈페이지<a href="http://woorigolfpro.kr" target="_sub">( 홈페이지 )</a></h4>
              <h5 class=" font-weight-light">2017.02 ~ 2017.03</h5>
            </v-card-title>
            <v-container>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <p>작업 요약: 프론트단 개발 및 어드민 커스텀 </p>
                  <p>작업 스토리 : </p>
                  <p>골프장 예약 및 고객관리 플랫폼 홈페이지였으며 프로젝트에선 정말 많이 배웠다. 익숙하지 않은 ci board 커스텀을 많이 해야해서 css,javascript,php,mysql 정신없이 일하면서 공부했었다.</p>
                  <p>이 프로젝트로 반응형웹을 알게되었고 만들게되었으며 향후 퍼블리싱을 하게될때 많은 도움이 되었다. 또한 ci-board 커스텀을 하면서 코드이그나이터 구조도 많이 파악하게 되었다!</p>

                  <div>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/html.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/javascript.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/css3.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/php.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ci.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ubuntu.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/mysql.png')" alt=""/></span>
                  </div>
                  
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          color="cyan lighten-1"
          fill-dot
          right
        >
          <v-card>
            <v-card-title class="cyan lighten-1">
              <h4 class="card-title  white--text font-weight-light">2-3. 떨이 상품 판매 웹어플리케이션</h4>
              <h5 class=" font-weight-light">2017.03 ~ 2017.04</h5>
            </v-card-title>
            <v-container>
              <v-layout wrap>
                <v-flex
                  xs12
                  md12
                >
                  <p>작업 요약: 프론트단 개발 </p>
                  <p>작업 스토리 : </p>
                  <p>이 프로젝트는 떨이 상품을 판매하는 웹어플리케이션으로 특이한 케이스로 서버사이드는 클라이언트가 구현했었고 api를 받아서 프론트 작업을 하였다.</p>

                  <p>역시나 주 업무는 html,css,javascript. api를 받아서 페이지에 맞는 화면 구성만 해주면 되는 업무여서 어려운점은 없었다. 처음으로 nodejs가 무엇인지 알게되었고 관심을 가지기 시작했다.</p>

                  <div>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/html.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/javascript.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/css3.jpg')" alt=""/></span>
                  </div>

                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          color="red lighten-1"
          fill-dot
          left
          small
        >
          <v-card>
            <v-card-title class="red lighten-1 justify-end">
              <h4 class="card-title  white--text font-weight-light">2-4. 피아노 연습실 플랫폼 및 커뮤니티 <a href="http://www.omnispiano.com" target="_sub">( 홈페이지 )</a></h4>
              <h5 class=" font-weight-light">2017.04 ~ 2017.06</h5>
            </v-card-title>
            <v-container>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <p>작업 요약: 프론트단, 백단, 각종 소셜api(로그인, 지도, 공유하기) </p>
                  <p>작업 스토리 : </p>
                  <p>정말 많은 기능을 요구하는 프로젝트였다. 피아노 연습실 위주로 연습실 주인과 연습실을 사용하려는 유저를 연결시켜주는 플랫폼이다.</p>
                  <p>크게 어드민단과 프론트 단으로 나뉘였는데 이 프로젝트부터는 사원이 나 말곤 없어서 혼자 하게되었다. 많은 시행착오와 스트레스 그걸 극복해낸 행복감이 교차했던 프로젝트였다.</p>
                  
                  <ul>
                    <li>어드민에서 관리자가 연습실 등록 및 회원 관리 가능한 기능</li>
                    <li>지도를 이용한 전국 연습실을 보여줌과 동시에 카드 리스트로유저 연습실 보여줌.(다음지도,무한 스크롤링)</li>
                    <li>연습실 공간마다 시간별 예약 및 달력에 표기.(fullcalendar사용)</li>
                    <li>관리자의 유튜브 영상을 게시판으로 연동.</li>
                    <li>각종 소셜로그인,소셜 공유</li>
                  </ul>

                  <p>막히는 부분이나 조언은 구글검색과 스택오버플로우 사용하려는 라이브러리 레퍼런스가 끝이였다. 조언을 구하기 힘든부분이 가장 컸던거같다.</p>

                  <p>업무를 하면서 두려웠던 생각이 많이 들었다. '이렇게 구현하는게 맞는걸까?', '정말 엉뚱하고 잘못된 방법이 아닐까?' 첫회사에서의 가장 힘들었던 시기였다.</p>

                  <div> 
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/html.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/javascript.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/css3.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/php.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ci.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ubuntu.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/mysql.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/naver.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/kakao.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/google.jpg')" alt=""/></span>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          color="green lighten-1"
          fill-dot
          right
        >
          <v-card>
            <v-card-title class="green lighten-1">
              <h4 class="card-title  white--text font-weight-light">2-5. 전문건설업 매칭 사이트 <a href="http://www.gunsulplus.com" target="_sub">( 홈페이지 )</a></h4>
              <h5 class=" font-weight-light">2017.07 ~ 2017.08</h5>
            </v-card-title>
            <v-container>
              <v-layout>
                <v-flex>
                  <p>작업 요약: 프론트단, 백단 </p>
                  <p>작업 스토리 : </p>
                  <p>처음 배운 언어는 java였지만 java로 프로젝트를 진행하는건 처음이였다. 기억이 날듯말듯 막상 해보니 금방 적응해 갔다.</p>

                  <p>하지만 '규모가 크지 않은 프로젝트인데 java를 쓸필요가 있을까?' 라는 생각이 많이 들었다. 변수 선언이 어색해져버렸다. 이때부터 php를 선호하게 되었을지도 모르겠다.</p>

                  <ul>
                    <li>건설 업체를 등록하고 관리하는 어드민 개발</li>
                    <li>엑셀로 db 업데이트</li>
                    <li>페이지 이동 및 매칭기능 구현</li>
                  </ul>
                  <div> 
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/html.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/javascript.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/css3.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/java.png')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ci.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/ubuntu.jpg')" alt=""/></span>
                    <span class="logo-frame"><v-img width="100px" :src="require('../assets/img/mysql.png')" alt=""/></span>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>  

    
  </div>
  
</template>

<script>
export default {
  data: () => ({
    
  }),
  methods : {
    info() {
      $('#proj1').css('display','none');
      $('#proj2').css('display','none');
      $('#skill-info').css('display','block');
    },
    viewProj1() {
      $('#proj1').css('display','block');
      $('#proj2').css('display','none');
      $('#skill-info').css('display','none');
    },
    viewProj2() {
      $('#proj1').css('display','none');
      $('#proj2').css('display','block');
      $('#skill-info').css('display','none');
    }
  }
}
</script>
