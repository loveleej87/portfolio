/*
 * @filename        : include.js
 * @author          : 이재이 (loveleej87@gmail.com)
 * @description     : 이벤트 처리
*/

/* 회사소개 */ 
// 회사소개 서브메뉴 열기
const companySub = document.querySelector('.submenuArea');
document.querySelector('#company').addEventListener('mouseover', (e) => {
    companySub.style.height = '68px';
    companySub.style.borderTop = '2px solid #e4dcd3';
    companySub.style.borderBottom = '2px solid #e4dcd3';
    companySub.style.backgroundColor = '#f6f3f2';
    companySub.style.transition = 'all 0.3s';
});

// 회사소개 서브메뉴 닫기 (메인메뉴로 마우스 이동 시)
document.querySelector('#menu4').addEventListener('mouseover', (e) => {
    companySub.style.height = '0';
    companySub.style.borderTop = '0';
    companySub.style.borderBottom = '0';
});

// 회사소개 닫기버튼 클릭 시 메뉴 닫기
document.querySelector('.btnClose').addEventListener('click', (e) => {
    e.preventDefault();
    companySub.style.height = '0';
    companySub.style.borderTop = '0';
    companySub.style.borderBottom = '0';
});

// 회사소개 메뉴 열때 모든 메뉴 닫기
document.querySelector('#company').addEventListener('mouseover', (e) => {
    btnSearch.className = 'searchArea';
    dimmed.style.height = '0';
    lanList.style.display = 'none';
    language.className = 'language';
    lanbtn.classList.remove('on');
});



/* 언어 메뉴 */
// language 버튼 열기
const lanList = document.querySelector('.lanList');
const language = document.querySelector('.language');

language.addEventListener('click', e => {
    if (lanList.style.display == 'block') {
        lanList.style.display = 'none';
    } else {
        lanList.style.display = 'block';
    }
});

// language 버튼 열때 버튼 애니메이션
const lanbtn = document.querySelector('.lanbtn');
lanbtn.addEventListener('click', e => {
    language.className = 'language';
    lanbtn.classList.toggle('on');
});

// language 버튼 열때 모든 메뉴 닫기
language.addEventListener('click', (e) => {
    e.preventDefault();
    companySub.style.height = '0';
    companySub.style.borderTop = '0';
    companySub.style.borderBottom = '0';
    btnSearch.className = 'searchArea';
    dimmed.className = 'dimmed';
});

// language 버튼 active 시 컬러 변경
language.addEventListener('click', e => {
    if (language.className === 'active') {
        language.className = 'language';
    } else {
        language.className = 'active';}
});



/* 검색 메뉴 */
// 검색 (1) 검색메뉴 열고 닫기
const btnSearch = document.querySelector('.searchArea');
document.querySelector('#btnSearch').addEventListener('click', e => {
    e.preventDefault();
    if (btnSearch.className == 'searchArea2') {
        btnSearch.className = 'searchArea';
    } else {
        btnSearch.className = 'searchArea2';
    }
});

// 검색 (1) 검색메뉴 열었을 때 검정배경 처리
const dimmed = document.querySelector('.dimmed');
document.querySelector('.btnSearch').addEventListener('click', e => {
    e.preventDefault();
    if (dimmed.className == 'dimmed2') {
        dimmed.className = 'dimmed';
    } else {
        dimmed.className = 'dimmed2';
    }
});

// 검색 (2) 엑스버튼 클릭
document.querySelector('.btnClose2').addEventListener('click', (e) => {
    e.preventDefault();
    btnSearch.className = 'searchArea';
});

// 검색 (2) 엑스버튼 클릭했을 때 검정배경 제거
document.querySelector('.btnClose2').addEventListener('click', e => {
    e.preventDefault();
    dimmed.className = 'dimmed';
});  

// 검색 메뉴 열때 모든 메뉴 닫기
document.querySelector('.btnSearch').addEventListener('click', (e) => {
    lanList.style.display = 'none';
    language.className = 'language';
    lanbtn.classList.remove('on');
    companySub.style.height = '0';
    companySub.style.borderTop = '0';
    companySub.style.borderBottom = '0';
});



/* 애니메이션 효과 */
// 회사소개 닫기버튼 애니메이션
const btnClose = document.querySelector('.btnClose');
btnClose.addEventListener('mouseover', buttonClick);
function buttonClick() {
    btnClose.classList.toggle('btnCloseSpin');
}
btnClose.addEventListener('mouseleave', buttonClick);
function buttonClick() {
    btnClose.classList.toggle('btnCloseSpin');
}

// 검색메뉴 닫기버튼 애니메이션
const btnClose2 = document.querySelector('.btnClose2');
btnClose2.addEventListener('mouseover', buttonClick2);
function buttonClick2() {
    btnClose2.classList.toggle('btnCloseSpin2');
}
btnClose2.addEventListener('mouseleave', buttonClick2);
function buttonClick2() {
    btnClose2.classList.toggle('btnCloseSpin2');
}