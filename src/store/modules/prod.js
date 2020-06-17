const state = {
    prodInfo: {},
    prodList: [
        {
            id: '1',
            title: '阳极键合',
            desc: '阳极键合技术也称为场辅助密封、静电键合。它可以将玻璃与金属、合金或半导体键合在一起而不用任何粘结剂。',
            src: require('$assets/CommonImg/ProdList/阳极键合.png')
        },
        {
            id: '2',
            title: '解键合',
            desc: '工艺完成以后，需将器件晶圆与载片分离。减薄后的器件晶圆会由其他器件晶圆(晶圆级键合，永久键合至另一个晶圆上)或胶膜(芯片-品圆键合时黏附在划片使用的支撑胶膜上)支撑。',
            src: require('$assets/CommonImg/ProdList/解键合.png')
        },
        {
            id: '3',
            title: '键合对准',
            desc: '晶圆键合对准机是把一片晶圆与另一片晶圆进行对准。',
            src: require('$assets/CommonImg/ProdList/键合对准.png')
        },
        {
            id: '4',
            title: '晶圆喷胶机',
            desc: '晶圆喷胶机是一种能够覆盖崎岖形貌的光刻胶涂覆设备，同时对厚胶涂覆和节省光刻胶方面有着非常明显的优势。',
            src: require('$assets/CommonImg/ProdList/喷胶机.png')
        },
        {
            id: '5',
            title: '紫外光刻机',
            desc: '光刻机(Mask Aligner) 又名掩模对准曝光机，曝光系统，光刻系统等。常用的光刻机是掩膜对准光刻，所以叫 Mask Alignment System.',
            src: require('$assets/CommonImg/ProdList/紫外光刻机.png')
        },
        {
            id: '6',
            title: '桌面显影机',
            desc: '显影机是将晒制好的印版通过半自动和全自动的程序将显影、冲洗、涂胶、烘干等工序一次性部分或全部完成的印刷处理设备。',
            src: require('$assets/CommonImg/ProdList/桌面式显影机.png'),
        },
        {
            id: '7',
            title: '匀胶机',
            desc: '匀胶机是在高速旋转的基片上，滴注各类胶液，利用离心力使滴在基片上的胶液均匀地涂覆在基片上的设备，膜的厚度取决于匀胶机的转速和溶胶的黏度。',
            src: require('$assets/CommonImg/ProdList/匀胶机.png'),
        },
        {
            id: '8',
            title: '热板',
            desc: '可编程存储多达20个程序，每个程序可设阶梯温度值30个阶段，单个阶段定时最长可达10小时（600分钟）',
            src: require('$assets/CommonImg/ProdList/热板.png'),
        },
        {
            id: '9',
            title: '贴膜机',
            desc: '贴膜机是专门用于电子/通讯/半导体等行业贴保护膜及防暴膜的机器，可确保无气泡无擦痕贴膜。',
            src: require('$assets/CommonImg/ProdList/贴膜机.png'),
        }
    ]
}
const mutations = {
    SET_PROD_INFO(state, info) {
        state.prodInfo = info
    }
}
const actions = {

}
export default {
    state,
    mutations,
    actions
}