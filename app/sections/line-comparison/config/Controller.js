import { Controller } from "cx/ui";
import {
	queryTopics,
	queryTopicIndicators,
	queryCountries,
	queryRegions
} from "api/data";

export default class extends Controller {
	onInit() {
		this.store.init({
			fromYear: 2000,
			toYear: 2015
		})
	}

	queryTopics(q) {
		return queryTopics(q);
	}

	queryTopicIndicators(q) {
		let topicId = this.store.get("topic.id");
		if (!topicId) return [];
		return queryTopicIndicators(topicId, q);
	}

	queryRegions(q) {
		return queryRegions(q);
	}

	queryCountries() {
		let regionId = this.store.get("region.id");
		return queryCountries(regionId);
	}
}
