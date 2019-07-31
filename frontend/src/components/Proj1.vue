<template>

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
          <v-card>
            <v-card-title class="indigo">
              <h4 class="card-title  white--text font-weight-light">2-1. 스냅푸시 <a href="http://snappush.snapcompany.net/" class="black--text" target="_sub">( 홈페이지 이동 )</a></h4>
              <h5 class="white--text font-weight-light">개발 및 고도화: 2018.07 ~ 2019.08</h5>
              <dialog1/>
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

                    <div style="margin:10px;">
                      <v-btn depressed large color="primary">HTML</v-btn>
                      <v-btn depressed large color="primary">Javascript</v-btn>
                      <v-btn depressed large color="primary">Jquery</v-btn>
                      <v-btn depressed large color="primary">Vue</v-btn>
                      <v-btn depressed large color="primary">Css3</v-btn>
                      <v-btn depressed large color="primary">Bootstrap</v-btn>
                    </div>        
                    <div style="margin:10px;">              
                        <v-btn depressed large color="error">PHP</v-btn>
                        <v-btn depressed large color="error">Xdebug</v-btn>
                        <v-btn depressed large color="error">Codeigniter</v-btn>
                        <v-btn depressed large color="error">Mysql</v-btn>
                        <v-btn depressed large color="error">MongoDB</v-btn>
                    </div>                      
                    <div style="margin:10px;">
                        <v-btn depressed large color="teal">aws</v-btn>
                        <v-btn depressed large color="teal">ubuntu</v-btn>
                        <v-btn depressed large color="teal">s3</v-btn>
                    </div>
                    <div style="margin:10px;">
                        <v-btn depressed large color="purple">Github</v-btn>
                        <v-btn depressed large color="purple">Jira</v-btn>
                    </div>                  

                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

          <v-card>
            <v-card-title class="indigo">
              <h4 class="card-title  white--text font-weight-light">2-2. 스냅알(개인 맞춤 상품 추천)</h4>
              <h5 class="white--text font-weight-light">개발: 2018.03 ~ 2018.06, 고도화: 2018.08 ~ 2019.08</h5>
              <dialog2/>
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

                  <div style="margin:10px;">
                      <v-btn depressed large color="primary">HTML</v-btn>
                      <v-btn depressed large color="primary">Javascript</v-btn>
                      <v-btn depressed large color="primary">Jquery</v-btn>
                      <v-btn depressed large color="primary">Css3</v-btn>
                      <v-btn depressed large color="primary">Bootstrap</v-btn>
                    </div>        
                    <div style="margin:10px;">              
                        <v-btn depressed large color="error">PHP</v-btn>
                        <v-btn depressed large color="error">Xdebug</v-btn>
                        <v-btn depressed large color="error">Codeigniter</v-btn>
                        <v-btn depressed large color="error">Mysql</v-btn>
                        <v-btn depressed large color="error">MongoDB</v-btn>
                    </div>                      
                    <div style="margin:10px;">
                        <v-btn depressed large color="teal">aws</v-btn>
                        <v-btn depressed large color="teal">ubuntu</v-btn>
                        <v-btn depressed large color="teal">s3</v-btn>
                    </div>
                    <div style="margin:10px;">
                        <v-btn depressed large color="purple">Github</v-btn>
                        <v-btn depressed large color="purple">Jira</v-btn>
                    </div>
                  
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

          <v-card>
            <v-card-title class="indigo">
              <h4 class="card-title  white--text font-weight-light">1-3. 스냅핏<a href="http://www.snapfit.co.kr/" class="black--text" target="_sub">( 홈페이지 )</a></h4>
              <h5 class=" white--text font-weight-light">개발: 2017.09 ~ 2018.05, 유지보수: 2018.05~2019.08</h5>
              <dialog3/>
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

                  <div style="margin:10px;">
                      <v-btn depressed large color="primary">HTML</v-btn>
                      <v-btn depressed large color="primary">Javascript</v-btn>
                      <v-btn depressed large color="primary">Jquery</v-btn>
                      <v-btn depressed large color="primary">Css3</v-btn>
                      <v-btn depressed large color="primary">Bootstrap</v-btn>
                    </div>        
                    <div style="margin:10px;">              
                        <v-btn depressed large color="error">PHP</v-btn>
                        <v-btn depressed large color="error">Xdebug</v-btn>
                        <v-btn depressed large color="error">Codeigniter</v-btn>
                        <v-btn depressed large color="error">Mysql</v-btn>
                        <v-btn depressed large color="error">REDIS</v-btn>
                    </div>                      
                    <div style="margin:10px;">
                        <v-btn depressed large color="teal">aws</v-btn>
                        <v-btn depressed large color="teal">ubuntu</v-btn>
                        <v-btn depressed large color="teal">s3</v-btn>
                    </div>
                    <div style="margin:10px;">
                        <v-btn depressed large color="purple">Github</v-btn>
                        <v-btn depressed large color="purple">Jira</v-btn>
                    </div>

                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
               
          
        
          

        
      </v-timeline>
    
</template>


<script>
import dialog1 from './Dialog.vue'
import dialog2 from './Dialog2.vue'
import dialog3 from './Dialog3.vue'


export default {
    components : {
        dialog1,
        dialog2,
        dialog3
    },
}
</script>
