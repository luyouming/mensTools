const state = {
    newsInfo: {},
    newsList: [
        {
            id: '1',
            title: '2017年苏州工业园区金鸡湖人才计划科技领军人才',
            content: `<div class="entry-header mb-30">
                <div class="post-thumb thumb"> <img class="img-fullwidth" src="http://memstools.chenhuiyu.top/images/bg/as33.jpg" alt=""></div>
                </div><div class="entry-content">
                <h5>热烈祝贺我公司资深研究员冒薇博士荣获“2017年度金鸡湖人才计划-科技领军人才”称号！</h5>
                <p>2017年12月27日下午，苏州工业园区第八届金鸡湖人才表彰大会在现代大厦召开</p>
                <h5>此次大会授予437人“金鸡湖人才”称号</h5>
                <p>其中30名高层次领军人才、183名科技领军人才、29名科教领军人才、6名高端服务业领军人才、189名高技能领军人才</p>
                <blockquote class="tm-sc tm-sc-blockquote blockquote-style3  quote-icon-theme-colored mb-20 mt-20">
                    <p>我公司资深研究员冒薇博士有幸成为其中一员。</p>
                    <footer><cite>要闻摘记</cite></footer>
                </blockquote>
            </div>`
        }
    ]
}
const mutations = {
    SET_NEWS_INFO(state, info) {
        state.newsInfo = info
    }
}
const actions = {

}
export default {
    state,
    mutations,
    actions
}