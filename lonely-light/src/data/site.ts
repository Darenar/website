export const profile = {
	name: 'Vladislav Pyzhov',
	title: 'Senior Machine Learning Engineer and Data Scientist',
	location: 'Sydney, Australia',
	email: 'vladpyzhov@gmail.com',
	linkedin: 'https://www.linkedin.com/in/vladislavpyzhov',
	github: 'https://github.com/Darenar',
	uts: 'https://www.uts.edu.au/about/faculties/business/research/finance-phd/vladislav-pyzhov',
};

export const projects = [
	{
		name: 'Easy Event Study',
		slug: 'easy-event-study',
		description:
			'A compact Python workflow for financial event studies: fetch returns and factors, estimate abnormal returns, calculate CAR statistics, and plot confidence intervals.',
		meta: 'Python · Finance research · 3 stars · 4 forks',
		tags: ['Event studies', 'Asset pricing', 'Open source'],
		url: 'https://github.com/Darenar/easy-event-study',
		featured: true,
	},
	{
		name: 'Deep Learning Asset Pricing',
		slug: 'deep-learning-asset-pricing',
		description:
			'A PyTorch implementation of the adversarial SDF architecture from Deep Learning in Asset Pricing: one network learns to price assets while another searches for the hardest pricing conditions.',
		meta: 'Python · PyTorch · 9 stars · 4 forks',
		tags: ['Deep learning', 'Asset pricing', 'PyTorch'],
		url: 'https://github.com/Darenar/DeepLearningAssetPricing_torch',
		featured: true,
	},
	{
		name: 'Asset Pricing Trees',
		slug: 'asset-pricing-trees',
		description:
			'An implementation of Forest through the Trees: recursively split stocks on firm characteristics, then prune the tree to a small, interpretable set of test portfolios.',
		meta: 'Python · 5 stars · 4 forks',
		tags: ['Portfolio construction', 'Research code'],
		url: 'https://github.com/Darenar/ap_trees',
		featured: true,
	},
	{
		name: 'Portfolio Study',
		slug: 'portfolio-study',
		description:
			'A practical toolkit for portfolio optimisation, construction, and comparative performance analysis.',
		meta: 'Python · Quantitative finance',
		tags: ['Optimisation', 'Portfolio analysis'],
		url: 'https://github.com/Darenar/portfolio_study',
		featured: true,
	},
	{
		name: 'DS Utils',
		slug: 'ds-utils',
		description:
			'Reusable utilities for recurring data-science tasks, collected from hands-on project work.',
		meta: 'Python · Developer tooling',
		tags: ['Data science', 'Utilities'],
		url: 'https://github.com/Darenar/ds_utils',
		featured: false,
	},
];
export const papers = [
	{
		title: "Is ESG’s market impact fading? Stock price reactions to ESG news over time",
		year: '2026',
		status: 'Working paper · Under review',
		authors: 'with Kristoffer J. Glover and Vitali Alexeev',
		summary:
			'We define media ESG events as firm-relative shifts in media sentiment accompanied by spikes in media attention, and detect tens of thousands of such events among S&P 500 constituents over 2000–2022. The market responds in the direction of the news, but the reaction is fundamentally time-varying. In the early 2000s the market penalized ESG news of either polarity; from the late 2000s to the mid-2010s reactions aligned with the polarity of the news; and since the late 2010s the reward for positive news has faded while the penalty for misconduct has intensified. The reaction is also, perhaps surprisingly, weakest for environmental events.',
		visual: 'figures',
		figures: [
			{
				src: '/research/esg-market-impact.png',
				alt: 'Rolling estimates of stock-market reactions to positive and negative ESG news from 2002 to 2021',
				caption: 'Estimated market reaction to positive and negative ESG news over time.',
			},
		],
		url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6043934',
		article: '/research/esg-market-impact/',
	},
	{
		title: 'Media ESG Scores and the Cross-Section of Stock Returns',
		year: '',
		status: 'Working paper · In progress',
		authors: 'Vladislav Pyzhov',
		summary:
			'We examine a broad panel of U.S. common stocks, comprising 416,363 firm-months in the return tests over 2000–2022. We find a significant association between media ESG scores—in both levels and monthly changes—and contemporaneous stock returns. While we find no association with next-month returns, media ESG information does have predictive power for future fundamentals and may affect demand from institutional investors. Importantly, the environmental pillar behaves differently: it shows the least pronounced association with stock returns, predicts lower future profitability, and is unrelated to subsequent institutional ownership.',
		visual: 'return-regressions',
		figures: [],
		url: null,
		article: null,
	},
	{
		title: 'Breaking with Tradition: Media ESG Signals and Portfolio Performance',
		year: '',
		status: 'Working paper · In progress',
		authors: 'with Kristoffer J. Glover and Vitali Alexeev',
		summary:
			'We compare portfolio sorts on media and traditional disclosure-based scores taken from the same provider. Traditional scores deliver the clearer financial performance. Media scores become informative mainly among the smaller firms, precisely where disclosure is weakest, and provide systematically better protection against future ESG scandals. The two sources are thus complements rather than substitutes.',
		visual: 'figures',
		figures: [
			{
				src: '/research/traditional-esg-returns.png',
				alt: 'Cumulative returns of portfolios sorted on traditional ESG scores compared with the market',
				caption: 'Traditional ESG scores: cumulative returns of the top and bottom portfolios.',
			},
			{
				src: '/research/media-esg-returns.png',
				alt: 'Cumulative returns of portfolios sorted on media ESG scores compared with the market',
				caption: 'Media ESG scores: cumulative returns of the top and bottom portfolios.',
			},
		],
		url: null,
		article: null,
	},
	{
		title: 'Diversifying ESG',
		year: '',
		status: 'Working paper · In progress',
		authors: 'with Kristoffer J. Glover and Vitali Alexeev',
		summary:
			'We show that part of the weak performance of media ESG portfolios is mechanical: the highest-scored firms share similar return dynamics, so simple sorts are poorly diversified. We therefore adapt an optimization in the spirit of Markowitz that maximizes the portfolio’s ESG ranking while explicitly controlling risk. The resulting portfolios match the ESG profile of simple sorts yet deliver lower volatility, higher Sharpe ratios, and significant alphas relative to both the market and matched ESG sorts.',
		visual: 'figures',
		figures: [
			{
				src: '/research/markowitz-efficient-frontier.png',
				alt: 'Mean-variance efficient frontier comparing the Markowitz, market and ESG-centroid portfolios',
				caption: 'Markowitz frontier: expected return against portfolio risk.',
			},
			{
				src: '/research/esg-efficient-frontier.png',
				alt: 'ESG-efficient frontier comparing the Markowitz, market and ESG-centroid portfolios',
				caption: 'ESG frontier: portfolio ESG score against portfolio risk.',
			},
		],
		url: null,
		article: null,
	},
	{
		title: 'Green in Need Is Green Indeed? Measuring Stock Greenness',
		year: '',
		status: 'Working paper · In progress',
		authors: 'Vladislav Pyzhov',
		summary:
			'How should one rank two firms with a similar level of environmental performance but a different level of environmental materiality? Starting from the influential work of Pástor, Stambaugh and Taylor, we show that the mechanical decision of how strongly to penalize or reward environmental materiality can substantially reclassify the same firms from green to brown, and can flip the sign of the estimated premium. The premium associated with environmental materiality holds even within industries, suggesting that what the market prices is a firm’s exposure to environmental issues rather than its level of environmental performance. Any conclusion about green assets, in short, ultimately rests on what “green” is defined to be.',
		visual: 'greenness-classification',
		industryFigure: {
			src: '/research/greenness-industry-map.png',
			alt: 'Firm observations in environmental score and environmental weight space, coloured by industry',
			caption: 'The same E-score and E-weight space, first coloured by industry.',
		},
		figures: [
			{
				src: '/research/greenness-classification-pastor.png',
				alt: 'Firm greenness classifications when environmental materiality receives full weight',
				caption: 'λ = 1: environmental materiality receives full weight.',
			},
			{
				src: '/research/greenness-classification-pool.png',
				alt: 'Firm greenness classifications when environmental materiality receives half weight',
				caption: 'λ = 0.5: a pooled definition between the two extremes.',
			},
			{
				src: '/research/greenness-classification-pyzhov.png',
				alt: 'Firm greenness classifications when environmental materiality is not penalized',
				caption: 'λ = 0: environmental materiality is not penalized.',
			},
		],
		url: null,
		article: null,
	},
];
export const conferences = [
	{
		year: '2025',
		name: '3rd Conference on Sustainable Banking and Finance (CSBF)',
		place: 'University of Naples Parthenope · Naples, Italy',
		note: 'Conference presentation',
	},
	{
		year: '2025',
		name: '6th CEFGroup Sustainable Finance and Reporting Symposium',
		place: 'Climate & Energy Finance Group · University of Otago',
		note: 'Paper presentation',
	},
	{
		year: '2024',
		name: 'HUB-SBA FS Summer Conference on Finance 2024',
		place: 'Conference presentation',
		note: 'PhD research',
	},
	{
		year: '2024',
		name: 'SoFiE Financial Econometrics Summer School',
		place: 'NYU Shanghai · Remote student-paper session',
		note: 'Student paper presentation',
	},
	{
		year: '2024',
		name: 'FIRN Annual Conference',
		place: 'Australia',
		note: 'Conference presentation',
	},
	{
		year: '2024',
		name: 'New Zealand Finance Meeting',
		place: 'New Zealand',
		note: 'Conference presentation',
	},
	{
		year: '2024',
		name: 'Massey Sustainable Finance Conference',
		place: 'Massey University · New Zealand',
		note: 'Paper presentation · ESG session',
	},
];
