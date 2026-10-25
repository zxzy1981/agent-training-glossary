const rawTerms = [
["旅游目的地","旅游管理","能够吸引游客到访并提供完整旅游体验的特定区域。","由吸引物、接待设施、交通条件、公共服务与目的地形象等共同构成，可以是一座城市、一个景区或跨区域旅游带。"],
["旅游吸引物","旅游管理","促使游客产生出游动机并前往某地的核心要素。","包括自然景观、文化遗产、节庆活动和主题设施等，其独特性、可达性与体验质量会直接影响目的地竞争力。"],
["旅游动机","旅游管理","推动个人产生并实施旅游行为的内在原因。","常见动机包括休闲放松、求知探索、社交交往、探亲访友和自我实现。识别动机有助于设计适配的旅游产品。"],
["全域旅游","旅游管理","将一定区域整体作为旅游目的地统筹建设的理念。","强调产业融合、设施共建、服务共享和居民参与，不局限于单一景区，而是提升区域整体吸引力与生活品质。"],
["智慧旅游","旅游管理","运用数字技术提升旅游服务、管理和体验的模式。","常利用大数据、物联网和移动互联网等技术，实现客流监测、智能导览、在线预订和精准营销。"],
["可持续旅游","旅游管理","兼顾经济、环境和社会文化影响的旅游发展方式。","在满足游客与当地社区需求的同时保护生态和文化资源，并让旅游收益更公平、长久地惠及相关群体。"],
["前厅部","酒店运营","负责宾客抵离、问询、礼宾和客房销售的重要部门。","它是酒店对客服务的枢纽，通常包括预订、接待、礼宾、总机和大堂副理等岗位，并协调住店期间的多项需求。"],
["客房部","酒店运营","负责客房清洁、维护及公共区域卫生的部门。","通过房态管理、客房清扫、布草管理与设施检查，为宾客提供安全、整洁、舒适的住宿环境。"],
["收益管理","酒店运营","通过预测需求和动态定价使有限客房收入最大化。","强调在合适时间以合适价格，将合适产品销售给合适客人，需综合需求预测、房价、库存和销售渠道。"],
["平均房价（ADR）","酒店运营","酒店一定时期内每间已售客房的平均收入。","计算方式是客房收入除以已售客房数，用于衡量定价水平，但需结合出租率和 RevPAR 一同分析。"],
["客房收益（RevPAR）","酒店运营","酒店每间可供出租客房产生的平均客房收入。","可用客房收入除以可售客房数计算，也可由 ADR 乘以出租率得到，是综合反映房价与入住表现的核心指标。"],
["客房出租率","酒店运营","已售客房数占可售客房数的比例。","反映酒店客房资源的利用程度。较高出租率不一定等于最高收益，还应关注房价、成本和客源结构。"],
["超额预订","酒店运营","接受超过可售房量的预订以抵消取消和未到店。","基于历史取消率和未到店率进行预测，可减少空房损失，但预测失误可能导致无法安排已确认预订的宾客入住。"],
["夜审","酒店运营","营业日结束时核对交易并更新酒店系统日期的流程。","通常检查房费、账务、房态和各营业点收入，生成经营报表并完成系统过账，是日常财务控制的重要环节。"],
["菜单工程","餐饮管理","依据菜品受欢迎度和贡献毛利优化菜单的方法。","常将菜品分为明星、金牛、难题和瘦狗四类，并据此调整定价、位置、推广或去留，以改善餐厅盈利能力。"],
["餐饮成本率","餐饮管理","餐饮原材料成本占对应餐饮收入的比例。","用于监控原料使用和经营效率，需结合采购价格、标准配方、库存损耗和菜品售价综合分析。"],
["标准食谱","餐饮管理","统一规定菜品原料、用量、制作和出品标准的文件。","有助于稳定口味与份量、核算成本和指导培训，也是采购计划与食品安全控制的重要依据。"],
["餐位周转率","餐饮管理","一定时段内每个餐位被使用的平均次数。","等于接待人次除以可用餐位数，可反映餐厅空间利用效率，但提升时也应保证服务与用餐体验。"],
["宴会服务","餐饮管理","针对会议、婚宴等集体活动提供的计划性餐饮服务。","涉及场地布置、菜单设计、流程衔接、人员分工与现场控制，通常依据宴会活动单进行跨部门协作。"],
["HACCP","餐饮管理","通过识别和控制关键环节预防食品安全风险的体系。","即危害分析与关键控制点，强调识别生物、化学和物理危害，并在采购、储存、加工等关键点设置控制标准。"],
["旅游产品","市场营销","为满足游客需求而组合提供的吸引物、设施与服务。","具有综合性、不可储存性和生产消费同步性，既包含交通、住宿等有形要素，也包含服务和情感体验。"],
["市场细分","市场营销","按共同特征将整体旅游市场划分为不同客群。","可依据地理、人口、心理或行为变量细分市场，再评估各群体的规模、潜力和可达性，选择目标市场。"],
["目的地形象","市场营销","游客对某一目的地形成的总体认知与情感印象。","受到宣传、口碑、媒体和亲身体验影响，会作用于游客的出游决策、满意度及重游意愿。"],
["体验营销","市场营销","通过创造感官、情感与参与体验影响消费者。","不只传递产品信息，还设计可感知、可互动、可记忆的消费场景，使游客与品牌建立更深的情感联系。"],
["忠诚度计划","市场营销","以积分、等级和权益鼓励顾客持续消费的机制。","酒店和旅游企业通过会员分级、积分兑换与个性化权益提高复购和直接预订，同时积累顾客偏好数据。"],
["在线旅行社（OTA）","市场营销","通过互联网提供旅游产品查询与预订的平台。","汇集酒店、机票、门票等产品，为消费者提供比价和预订服务；企业借此扩大分销，但通常需要支付佣金。"],
["接待业","行业基础","为离家在外者提供住宿、餐饮和相关服务的行业集合。","以服务和体验为核心，通常涵盖酒店、餐饮、度假村、会展服务等，与旅游业存在高度交叉。"],
["服务接触","行业基础","顾客与服务人员、设施或系统发生互动的关键时刻。","会显著影响顾客对质量的判断。面对面沟通、自助入住和电话问询等都是需要设计的服务接触。"],
["服务补救","行业基础","服务失误后为恢复顾客满意所采取的行动。","通常包括及时倾听、真诚致歉、快速解决、适度补偿和事后跟进，也能帮助组织发现流程问题。"],
["无形性","行业基础","服务在购买前无法像实物一样被观察或试用的特征。","使顾客更依赖品牌、口碑和环境线索判断质量。企业可用标准展示、服务承诺和有形环境降低感知风险。"],
["峰谷需求","行业基础","旅游与酒店需求随季节和时段高低波动的现象。","源于气候、节假日和商务周期等因素，企业可利用差异定价、产品组合和灵活排班平衡供需。"],
["旅行社","旅行服务","为旅游者组织行程并代理销售旅游服务的企业。","可组合交通、住宿、游览等单项服务形成包价产品，也可提供咨询、代订和接待服务。"],
["包价旅游","旅行服务","将两项及以上旅游服务按一个总价组合销售的产品。","通常由旅行社预先设计行程，整合交通、住宿、餐饮和游览等要素，便于游客一次性购买。"],
["地接社","旅行服务","在目的地为外来团队或散客提供接待服务的旅行社。","熟悉当地资源，负责车辆、住宿、餐饮、导游和景点衔接，并与组团社共同保障行程实施。"],
["领队","旅行服务","代表组团旅行社带领出境团队并提供协调服务的人员。","负责集合、出入境协助、行程衔接和突发事件协调，并帮助维护团队秩序及旅游者合法权益。"],
["会奖旅游（MICE）","旅行服务","围绕会议、奖励旅游、大会和展览开展的商务旅游。","具有计划性强、消费水平较高、参与主体多等特点，需要场馆、住宿、交通和活动策划等多方协同。"]
];

const terms=rawTerms.map(([name,category,summary,detail])=>({name,category,summary,detail}));
const $=selector=>document.querySelector(selector);
const grid=$("#term-grid"),filters=$("#category-filters"),search=$("#search-input"),count=$("#result-count"),empty=$("#empty-state"),dialog=$("#term-dialog");
const categories=["全部",...new Set(terms.map(term=>term.category))];
let active="全部";

function renderFilters(){
  filters.innerHTML=categories.map(category=>`<button class="filter${category===active?" active":""}" type="button" data-category="${category}" aria-pressed="${category===active}">${category}</button>`).join("");
}
function renderTerms(){
  const keyword=search.value.trim().toLocaleLowerCase("zh-CN");
  const visible=terms.filter(term=>(active==="全部"||term.category===active)&&Object.values(term).join(" ").toLocaleLowerCase("zh-CN").includes(keyword));
  grid.innerHTML=visible.map(term=>`<button class="card" type="button" data-index="${terms.indexOf(term)}" aria-label="查看${term.name}的完整解释"><span class="pill">${term.category}</span><h3>${term.name}</h3><p>${term.summary}</p></button>`).join("");
  count.textContent=`找到 ${visible.length} / ${terms.length} 个术语`;
  grid.hidden=!visible.length;empty.hidden=!!visible.length;
}
function openTerm(index){const term=terms[index];$("#dialog-category").textContent=term.category;$("#dialog-title").textContent=term.name;$("#dialog-summary").textContent=term.summary;$("#dialog-detail").textContent=term.detail;dialog.showModal()}
filters.addEventListener("click",event=>{const button=event.target.closest("[data-category]");if(!button)return;active=button.dataset.category;renderFilters();renderTerms()});
grid.addEventListener("click",event=>{const card=event.target.closest("[data-index]");if(card)openTerm(Number(card.dataset.index))});
search.addEventListener("input",renderTerms);
$("#reset-button").addEventListener("click",()=>{search.value="";active="全部";renderFilters();renderTerms();search.focus()});
$("#dialog-close").addEventListener("click",()=>dialog.close());$("#dialog-done").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",event=>{if(event.target===dialog)dialog.close()});
document.addEventListener("keydown",event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();search.focus()}});
renderFilters();renderTerms();
